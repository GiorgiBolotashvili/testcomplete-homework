function Test1()
{
   TestedApps.Orders.Run();  
    let orders = Aliases.Orders;
    
    //open file
    openFile(orders);
    
    //add new order
    addOrder(orders);
    //Update default parents element name (Group to ElementsGroup)
    let group = orders.OrderForm.ElementsGroup;
    orders.MainForm.OrdersView.DblClickItem("John Doe", "MyMoney");

    //Update default Alias  element name (Costumer to CustomerName)
    Log.Message( group.CustomerName.wText);
    
    orders.OrderForm.ButtonOK.ClickButton();
    
    //check order all properties and row count 
    let table = Tables.OrdersView2;
    
    checkAllProperties(table);
    checkRowCount(table);
    
    //Delete added order 
    deleteRow(orders);
    
    //check row count
    checkRowCount(Tables.OrdersView3);
    
    orders.MainForm.Close();
    orders.dlgConfirmation.btnNo.ClickButton();
}



function addOrder(orders)
{
  orders.MainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.ElementsGroup;
  groupBox.ProductNames.ClickItem("MyMoney");
  groupBox.Quantity.wValue = 5;
  let textBox = groupBox.CustomerName;
  textBox.Click(57, 7);
  textBox.SetText("John Doe");
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText("Rustaveli");
  textBox.Keys("[Tab]");
  textBox = groupBox.City;
  textBox.SetText("Tbilisi");
  textBox.Keys("[Tab]");
  textBox = groupBox.State;
  textBox.SetText("Georgia");
  textBox.Keys("[Tab]");
  groupBox.Zip.SetText("1110");
  groupBox.MasterCard.ClickButton();
  textBox = groupBox.CardNo;
  textBox.Click(55, 12);
  textBox.SetText("AAAA11119999");
  orderForm.ButtonOK.ClickButton();
}

function checkAllProperties(table)
{
  let rowCount = table.RowCount;
  let columnCount = table.ColumnCount;
  
  for (let i=0;i<columnCount;i++ )
  {
    Log.Message("Column "+ (i+1) + ", value is   " + table.Values(rowCount-1, i));
  }
}

function deleteRow(orders)
{
  orders.MainForm.ToolBar.ClickItem(6, false);
  orders.dlgConfirmation.btnYes.ClickButton();
}

function checkRowCount(table)
{
  Log.Message("Row Count is: " + table.RowCount);
}

function openFile(orders)
{
  orders.MainForm.MainMenu.Click("File|Open...");
  orders.dlgOpen.OpenFile("D:\\Coding\\Test Automation\\testcomplete-homework\\Untitled.tbl", "Table (*.tbl)");
}

