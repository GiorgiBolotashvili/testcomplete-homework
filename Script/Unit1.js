function Test1()
{
  let orders = Aliases.Orders;
  orders.MainForm.OrdersView.DblClickItem("Giorgi", "MyMoney");
  let orderForm = orders.OrderForm;

  
    let productName = Aliases.Orders.OrderForm.Group.ProductNames;
  Log.Message("selected value of product is: " + productName.SelectedItem);
  Log.Message("element count of product is: " + productName.wItemCount);
  
  let card = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Visa");
  
  Log.Message("checked or unchecked card visa: " + card.Checked);
  
  let name = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Customer");
  
  Log.Message("Customer name value is: " + name.wText);
  
  orderForm.WinFormsObject("ButtonOK").ClickButton();
  
  
}