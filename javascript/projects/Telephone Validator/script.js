 const input = document.getElementById('phoneInput');

  input.addEventListener('input', () => {
    let digits = input.value.replace(/\D/g, '').slice(0, 10); // limit to 10 digits

    let formatted = '';
    if (digits.length <= 3) {
      formatted = digits;
    } else {
      formatted = `+(${digits.slice(0, 3)}) - ${digits.slice(3)}`;
      console.log(formatted);
    }

    input.value = formatted;
  });