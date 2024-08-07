document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('budget-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario
        alert('Datos enviados correctamente');
        form.reset(); // Opcional: resetea el formulario después de enviar
    });

    // Código para calcular y actualizar el presupuesto final
    const productSelect = document.getElementById('product');
    const deliveryTimeInput = document.getElementById('delivery-time');
    const extrasCheckboxes = document.querySelectorAll('input[name="extra"]');
    const finalBudgetSpan = document.getElementById('final-budget');

    function updateFinalBudget() {
        let total = parseInt(productSelect.value) || 0;
        total += parseInt(deliveryTimeInput.value) || 0;
        extrasCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.value);
            }
        });
        finalBudgetSpan.textContent = total;
    }

    productSelect.addEventListener('change', updateFinalBudget);
    deliveryTimeInput.addEventListener('input', updateFinalBudget);
    extrasCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateFinalBudget);
    });

    updateFinalBudget(); // Actualizar presupuesto al cargar la página
});
