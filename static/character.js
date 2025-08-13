//          GPT SCRIPT
//          https://chatgpt.com/share/689b7e10-e404-8005-8610-fc989c4f244d
function collectFormData() {
    const data = {};

    // Text inputs and textareas
    document.querySelectorAll('input[type="text"], textarea').forEach(el => {
        data[el.placeholder || el.previousElementSibling?.innerText || el.id] = el.value;
    });

    // Checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(el => {
        data[el.id] = el.checked;
    });

    return data;
}

function populateFormData(data) {
    // Text inputs and textareas
    document.querySelectorAll('input[type="text"], textarea').forEach(el => {
        const key = el.placeholder || el.previousElementSibling?.innerText || el.id;
        if (data.hasOwnProperty(key)) {
            el.value = data[key];
        }
    });

    // Checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(el => {
        if (data.hasOwnProperty(el.id)) {
            el.checked = data[el.id];
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('exportBtn').addEventListener('click', () => {
        const json = JSON.stringify(collectFormData(), null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'character_data.json';
        a.click();
        URL.revokeObjectURL(a.href);
    });

    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });

    document.getElementById('fileInput').addEventListener('change', function () {
        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const data = JSON.parse(e.target.result);
                populateFormData(data);
            } catch (err) {
                alert('Invalid JSON file.');
            }
        };
        reader.readAsText(file);
    });
    
})

