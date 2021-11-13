function main(){
    
   TestedApps.Orders.Run();  
    let orders = Aliases.Orders;

    //add two order from sql database
    addOrderFromSql(orders, Project.Variables.ordersTableSQL);
    
        //add two order from Excel
    addOrderFromSql(orders, Project.Variables.ordersTableExcel);
    
}

function addOrderFromSql(orders, DBTable)
{
  do
  {
   orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.ElementsGroup;
  let comboBox = groupBox.ProductNames;
  
  comboBox.Keys("[Tab]");
  comboBox.ClickItem(DBTable.Value("Product"));
  
  comboBox.Keys("[Tab]");
  let textBox = groupBox.Quantity;
  textBox.UpDownEdit.Drag(23, 8, -60, -7);
  textBox.wValue = DBTable.Value("Quantity");

  textBox.Keys("[Tab]");
  let dateTimePicker = groupBox.Date;
  
  dateTimePicker.Keys("[Tab]");
  dateTimePicker.wDate = DBTable.Value("Date");
  textBox = groupBox.CustomerName;
  
  dateTimePicker.Keys("[Tab]");
  textBox.SetText(DBTable.Value("CustomerName"));
  
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText(DBTable.Value("Street"));
  
  textBox.Keys("[Tab]");
  textBox = groupBox.City;
  textBox.SetText(DBTable.Value("City"));
  
  textBox.Keys("[Tab]");
  textBox = groupBox.State;
  textBox.SetText(DBTable.Value("State"));
  
  textBox.Keys("[Tab]");
  textBox = groupBox.Zip;
  textBox.SetText(DBTable.Value("Zip"));
  
  textBox.Keys("[Tab]");
  
  groupBox.Visa.Keys("[Tab]");
  textBox = groupBox.CardNo;
  textBox.SetText(DBTable.Value("CardNo"));
  
  textBox.Keys("[Tab]");
  dateTimePicker = groupBox.ExpDate;
  dateTimePicker.wDate = DBTable.Value("ExpirationDate");
  
  dateTimePicker.Keys("[Tab]");
  orderForm.ButtonOK.Keys("[Enter]");
  DBTable.Next();
  }
  while (!DBTable.IsEOF());
  
}
