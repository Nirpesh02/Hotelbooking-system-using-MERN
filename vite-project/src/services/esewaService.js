export const initiateEsewaPayment = (amount) => {
  const form = document.createElement("form");
  form.method = "POST";
  form.action =
    "";

  const params = {
    amount: amount,
    tax_amount: 0,
    total_amount: amount,
    transaction_uuid: Date.now(),
    product_code: "EPAYTEST",
    success_url: "",
    failure_url: "",
  };

  Object.keys(params).forEach((key) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = params[key];
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};
