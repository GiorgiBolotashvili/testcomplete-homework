function main(){
    
   TestedApps.Orders.Run();  
    let orders = Aliases.Orders;

    
    //add two order from sql database
    addOrder(orders);
}

function addOrder(orders)
{
  Log.Message( Project.Variables.ordersTableSQL.ColumnCount);
  Log.Message( Project.Variables.ordersTableSQL.ColumnName(1));
  Log.Message( Project.Variables.ordersTableSQL.Value("Product"));
  Log.Message( Project.Variables.ordersTableSQL.Next());
  
  for(let i=0; i< Project.Variables.ordersTableSQL.ColumnCount; i++) {

  orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.ElementsGroup;
  let comboBox = groupBox.ProductNames;
  comboBox.Keys("[Tab]");
  comboBox.ClickItem(Project.Variables.ordersTableSQL.ColumnName(2));
  comboBox.Keys("[Tab]");
  let upDownEdit = groupBox.Quantity.UpDownEdit;
  upDownEdit.Keys("[Up]");
  upDownEdit.Keys("[Up]");
  upDownEdit.Keys("[Up]");
  upDownEdit.Keys("[Up]");
  upDownEdit.Keys("[Tab]");
  groupBox.Price.Keys("[Tab]");
  groupBox.Discount.Keys("[Tab]");
  let textBox = groupBox.groupBox1.Total;
  textBox.SetText(Project.Variables.ordersTableSQL.ColumnName(3));
  textBox.Keys("[Tab]");
  let dateTimePicker = groupBox.Date;
  dateTimePicker.Keys("[Tab]");
  dateTimePicker.wDate = Project.Variables.ordersTableSQL.ColumnName(4);
  textBox = groupBox.CustomerName;
  dateTimePicker.Keys("[Tab]");
  textBox.SetText(Project.Variables.ordersTableSQL.ColumnName(1));
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText(Project.Variables.ordersTableSQL.ColumnName(5));
  textBox.Keys("[Tab]");
  textBox = groupBox.City;
  textBox.SetText(Project.Variables.ordersTableSQL.ColumnName(6));
  textBox.Keys("[Tab]");
  textBox = groupBox.State;
  textBox.SetText(Project.Variables.ordersTableSQL.ColumnName(7));
  textBox.Keys("[Tab]");
  textBox = groupBox.Zip;
  textBox.SetText(Project.Variables.ordersTableSQL.ColumnName(8));
  textBox.Keys("[Tab]");
  groupBox.Visa.Keys("[Tab]");
  textBox = groupBox.CardNo;
  textBox.SetText(Project.Variables.ordersTableSQL.ColumnName(10));
  textBox.Keys("[Tab]");
  dateTimePicker = groupBox.ExpDate;
  dateTimePicker.wDate = Project.Variables.ordersTableSQL.ColumnName(11);
  dateTimePicker.Keys("[Tab]");
  orderForm.ButtonOK.Keys("[Enter]");
//  orderForm.ButtonOK.ClickButton();

    
  }
  

}

function Test1()
{
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.Activate();
  mainForm.Drag(357, 12, -100, -116);
  mainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.ElementsGroup;
  let numericUpDown = groupBox.Quantity;
  numericUpDown.UpDownEdit.Drag(13, 6, -23, -1);
  numericUpDown.wValue = 5;
  let textBox = groupBox.groupBox1.Total;
  textBox.Drag(37, 9, -101, 2);
  textBox.SetText("10");
  groupBox.Click(242, 97);
  orderForm.ButtonCancel.ClickButton();
  groupBox.Date.wDate = "2012-04-06";
  mainForm.Close();
}

function Test2()
{
  orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.ElementsGroup;
  let comboBox = groupBox.ProductNames;
  comboBox.Keys("[Tab]");
  comboBox.ClickItem("MyMoney");
  comboBox.Keys("[Tab]");
  let upDownEdit = groupBox.Quantity.UpDownEdit;
  upDownEdit.Keys("[Up]");
  upDownEdit.Keys("[Up]");
  upDownEdit.Keys("[Up]");
  upDownEdit.Keys("[Up]");
  upDownEdit.Keys("[Tab]");
  groupBox.Price.Keys("[Tab]");
  groupBox.Discount.Keys("[Tab]");
  let textBox = groupBox.groupBox1.Total;
  textBox.SetText("50");
  textBox.Keys("[Tab]");
  let dateTimePicker = groupBox.Date;
  dateTimePicker.Keys("[Tab]");
  dateTimePicker.wDate = "2005-03-06";
  textBox = groupBox.CustomerName;
  textBox.Keys("![Tab]");
  dateTimePicker.wDate = "2021-03-11";
  dateTimePicker.Keys("[Tab]");
  textBox.SetText("Giorgi");
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText("StreetParadise");
  textBox.Keys("[Tab]");
  textBox = groupBox.City;
  textBox.SetText("Gori");
  textBox.Keys("[Tab]");
  textBox = groupBox.State;
  textBox.SetText("Georgia");
  textBox.Keys("[Tab]");
  textBox = groupBox.Zip;
  textBox.SetText("1100");
  textBox.Keys("[Tab]");
  groupBox.Visa.Keys("[Tab]");
  textBox = groupBox.CardNo;
  textBox.SetText("17286310786321063");
  textBox.Keys("[Tab]");
  dateTimePicker = groupBox.ExpDate;
  dateTimePicker.wDate = "2025-03-11";
  dateTimePicker.Keys("[Tab]");
  orderForm.ButtonOK.Keys("[Enter]");
}