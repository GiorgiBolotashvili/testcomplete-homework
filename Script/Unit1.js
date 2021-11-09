function Test1()
{
  TestedApps.Orders.Run();  
  
  let orders = Aliases.Orders;
  orders.MainForm.MainMenu.Click("File|Open...");
  orders.dlgOpen.OpenFile("D:\\Coding\\Test Automation\\testcomplete-homework\\Untitled.tbl", "Table (*.tbl)");
  
  orders.MainForm.OrdersView.DblClickItem("Giorgi", "MyMoney");
  
  let orderForm = orders.OrderForm;

  
    let productName = Aliases.Orders.OrderForm.Group.ProductNames;
  Log.Message("selected value of product is: " + productName.SelectedItem);
  Log.Message("element count of product is: " + productName.wItemCount);
  
  let myCard = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Visa");
  
  Log.Message("checked or unchecked card visa: " + myCard.Checked);
  
  let name = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Customer");
  
  Log.Message("Customer name value is: " + name.wText);
  
  orderForm.WinFormsObject("ButtonOK").ClickButton();

  let mainForm = orders.MainForm;
  mainForm.Close();
  orders.dlgConfirmation.btnNo.ClickButton();
  
}