function showValues() {
    const form = document.getElementById("myForm");
    const noteValue = form.note.value;
    const categoryValue = form.category.value;
    const dateValue = form.date.value;
    

    document.getElementById("result").innerHTML = `<p>Примітка: ${noteValue}</p>
                                                  <p>Категорія: ${categoryValue}</p>
                                                  <p>Дата: ${dateValue}</p>`;
    

    const datesList = dateValue.match(/\d{2}\.\d{2}\.\d{4}/g);
    if (datesList && datesList.length > 0) {
        document.getElementById("datesList").innerHTML = "<p>Перелік дат: " + datesList.join(", ") + "</p>";
    } else {
        document.getElementById("datesList").innerHTML = "<p>Перелік дат: Відсутні</p>";
    }
}