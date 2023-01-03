using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Newtonsoft.Json;

namespace Currency_Converter_Using_API
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        Root val = new Root();
        public class Root
        {
            public Rate rates { get; set; }
            public long timeStamp { get; set; }
            public string license { get; set; }
        }

        public class Rate
        {
            public double INR { get; set; }
            public double JPY { get; set; }
            public double USD { get; set; }
            public double NZD { get; set; }
            public double EUR { get; set; }
            public double CAD { get; set; }
            public double ISK { get; set; }
            public double PHP { get; set; }
            public double DKK { get; set; }
            public double CZK { get; set; }
            public double AED { get; set; }
            public double ANG { get; set; }
            public double AUD { get; set; }
            public double BTC { get; set; }
            public double BDT { get; set; }
            public double CNY { get; set; }
            public double EGP { get; set; }
            public double KWD { get; set; }
        }
        public MainWindow()
        {
            InitializeComponent();
            GetValue();
        }

        public static async Task<Root> GetData<T>(string url)
        {
            var myRoot=new Root();
            try
            {
                using(var client=new HttpClient())
                {
                    client.Timeout = TimeSpan.FromMinutes(1);
                    HttpResponseMessage response= await client.GetAsync(url);
                    if(response.StatusCode==System.Net.HttpStatusCode.OK)
                    {
                        var responseString= await response.Content.ReadAsStringAsync();
                        var responseObject = JsonConvert.DeserializeObject<Root>(responseString);
                        MessageBox.Show("License:" + responseObject.license, "Information", MessageBoxButton.OK, MessageBoxImage.Information);
                        return responseObject;
                    }
                }
                return myRoot;
            }
            catch
            {
                return myRoot;
            }
        }
        private async void GetValue()
        {
            val = await GetData<Root>("https://openexchangerates.org/api/latest.json?app_id=a218d32ca2bd492cab897f33c9c01ef5");
            BindCurrency();
        }
        private void BindCurrency()
        {
            DataTable dtCurrency = new DataTable();
            dtCurrency.Columns.Add("Text");
            dtCurrency.Columns.Add("Value");

            dtCurrency.Rows.Add("--Select--", 0);
            dtCurrency.Rows.Add("INR", val.rates.INR);
            dtCurrency.Rows.Add("JPY", val.rates.JPY);
            dtCurrency.Rows.Add("USD", val.rates.USD);
            dtCurrency.Rows.Add("NZD", val.rates.NZD);
            dtCurrency.Rows.Add("EUR", val.rates.EUR);
            dtCurrency.Rows.Add("CAD", val.rates.CAD);
            dtCurrency.Rows.Add("ISK", val.rates.ISK);
            dtCurrency.Rows.Add("PHP", val.rates.PHP);
            dtCurrency.Rows.Add("CZK", val.rates.CZK);
            dtCurrency.Rows.Add("DKK", val.rates.DKK);
            dtCurrency.Rows.Add("AED", val.rates.AED);
            dtCurrency.Rows.Add("ANG", val.rates.ANG);
            dtCurrency.Rows.Add("BTC", val.rates.BTC);
            dtCurrency.Rows.Add("AUD", val.rates.AUD);
            dtCurrency.Rows.Add("BDT", val.rates.BDT);
            dtCurrency.Rows.Add("CNY", val.rates.CNY);
            dtCurrency.Rows.Add("EGP", val.rates.EGP);
            dtCurrency.Rows.Add("KWD", val.rates.KWD);

            cmbFromCurrency.ItemsSource = dtCurrency.DefaultView;
            cmbFromCurrency.DisplayMemberPath = "Text";
            cmbFromCurrency.SelectedValuePath = "Value";
            cmbFromCurrency.SelectedIndex = 0;

            cmbToCurrency.ItemsSource = dtCurrency.DefaultView;
            cmbToCurrency.DisplayMemberPath = "Text";
            cmbToCurrency.SelectedValuePath = "Value";
            cmbToCurrency.SelectedIndex = 0;
        }

        private void Number_Validation(object sender, TextCompositionEventArgs e)
        {
            Regex regex = new Regex("[^0-9]+");
            e.Handled = regex.IsMatch(e.Text);
        }

        private void Convert_Click(object sender, RoutedEventArgs e)
        {
            double convertedValue;
            if ((txtCurrency.Text == null) || (txtCurrency.Text.Trim() == ""))
            {
                MessageBox.Show("Please enter currency value", "Information", MessageBoxButton.OK, MessageBoxImage.Information);
                txtCurrency.Focus();
                return;
            }

            else if ((cmbFromCurrency.SelectedIndex == 0))
            {
                MessageBox.Show("Please select currency from", "Information", MessageBoxButton.OK, MessageBoxImage.Information);
                cmbFromCurrency.Focus();
                return;
            }

            else if ((cmbToCurrency.SelectedIndex == 0))
            {
                MessageBox.Show("Please select currency To", "Information", MessageBoxButton.OK, MessageBoxImage.Information);
                cmbToCurrency.Focus();
                return;
            }

            if (cmbFromCurrency.Text == cmbToCurrency.Text)
            {
                convertedValue = double.Parse(txtCurrency.Text);
                lblCurrency.Content = cmbToCurrency.Text + " " + convertedValue.ToString("N3");
            }

            else
            {
                convertedValue = (double.Parse(cmbToCurrency.SelectedValue.ToString()) * double.Parse(txtCurrency.Text)) / (double.Parse(cmbFromCurrency.SelectedValue.ToString()));
                lblCurrency.Content = cmbToCurrency.Text + " " + convertedValue.ToString("N3");
            }
        }

        private void Clear_Click(object sender, RoutedEventArgs e)
        {
            ClearControls();
        }

        private void ClearControls()
        {
            txtCurrency.Text = string.Empty;
            if (cmbFromCurrency.Items.Count > 0)
                cmbFromCurrency.SelectedIndex = 0;
            if (cmbToCurrency.Items.Count > 0)
                cmbToCurrency.SelectedIndex = 0;
            lblCurrency.Content = "";
            txtCurrency.Focus();
        }
    }
}

