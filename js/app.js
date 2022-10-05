const root = document.getElementById('root');
let headApp = document.createElement('h1');

let arr = [
    { name: 'Павел', surname: 'Лукьянов', patronymic: 'Александрович', startEd: new Date(2015, 09, 01), fac: 'УТС', birthday: new Date(1996, 04, 21) },
    { name: 'Денис', surname: 'Сахаров', patronymic: 'Викторович', startEd: new Date(2020, 12, 11), fac: 'Программист', birthday: new Date(2000, 08, 29) },
    { name: 'Игорь', surname: 'Николаев', patronymic: 'Сергеевич', startEd: new Date(2022, 06, 01), fac: 'Физика', birthday: new Date(1990, 01, 11) },
]

// Создание формы
function createAddForm() {
    let name = document.createElement('input');
    let surname = document.createElement('input');
    let patronymic = document.createElement('input');
    let dateBirth = document.createElement('input');
    let startLearn = document.createElement('input');
    let faculty = document.createElement('input');
    let addBtn = document.createElement('button');
    let form = document.createElement('form');
    let divName = document.createElement('div');
    let divSurname = document.createElement('div');
    let divPatronymic = document.createElement('div');
    let divDateBirth = document.createElement('div');
    let divStartLearn = document.createElement('div');
    let divFaculty = document.createElement('div');
    let spanName = document.createElement('span');
    let spanSurname = document.createElement('span');
    let spanPatronymic = document.createElement('span');
    let spanDateBirth = document.createElement('span');
    let spanStartLearn = document.createElement('span');
    let spanFaculty = document.createElement('span');

    form.classList.add('form');

    name.type = 'text';
    name.name = 'name';
    name.classList.add('form-control');
    divName.textContent = 'Имя';
    spanName.textContent = 'Заполните поле "Имя"';
    spanName.classList.add('form__warning');
    divName.append(spanName);
    divName.classList.add('input__container');
    divName.append(name);

    surname.type = 'text';
    surname.name = 'surname';
    surname.classList.add('form-control');
    divSurname.textContent = 'Фамилия';
    spanSurname.textContent = 'Заполните поле "Фамилия"';
    spanSurname.classList.add('form__warning');
    divSurname.append(spanSurname);
    divSurname.classList.add('input__container');
    divSurname.append(surname);

    patronymic.type = 'text';
    patronymic.name = 'patronymic';
    patronymic.classList.add('form-control');
    divPatronymic.textContent = 'Отчество';
    spanPatronymic.textContent = 'Заполните поле "Отчество"';
    spanPatronymic.classList.add('form__warning');
    divPatronymic.append(spanPatronymic);
    divPatronymic.classList.add('input__container');
    divPatronymic.append(patronymic);

    dateBirth.type = 'date';
    dateBirth.name = 'dateBirth';
    dateBirth.classList.add('form-control');
    divDateBirth.textContent = 'Дата рождения';
    spanDateBirth.textContent = 'Заполните поле "Дата рождения"';
    spanDateBirth.classList.add('form__warning');
    divDateBirth.append(spanDateBirth);
    divDateBirth.classList.add('input__container');
    divDateBirth.append(dateBirth);

    startLearn.type = 'date';
    startLearn.name = 'startLearn';
    startLearn.classList.add('form-control');
    divStartLearn.textContent = 'Начало обучения';
    spanStartLearn.textContent = 'Заполните поле "Начало обучения"';
    spanStartLearn.classList.add('form__warning');
    divStartLearn.append(startLearn);
    divStartLearn.append(spanStartLearn);
    divStartLearn.classList.add('input__container');
    divStartLearn.append(startLearn);

    faculty.type = 'text';
    faculty.name = 'faculty';
    faculty.classList.add('form-control');
    divFaculty.textContent = 'Факультет';
    spanFaculty.textContent = 'Заполните поле "Факультет"';
    spanFaculty.classList.add('form__warning');
    divFaculty.append(spanFaculty);
    divFaculty.classList.add('input__container');
    divFaculty.append(faculty);

    addBtn.type = 'submit';
    addBtn.textContent = 'Добавить студента';
    addBtn.classList.add('btn', 'btn-primary', 'btn__students');

    form.append(divName);
    form.append(divSurname);
    form.append(divPatronymic);
    form.append(divDateBirth);
    form.append(divStartLearn);
    form.append(divFaculty);
    form.append(addBtn);
    root.append(form);
    form.addEventListener('submit', addStudents);
}

//Функция добавления студента
function addStudents(event) {
    let name = document.querySelector('input[name=name]');
    let surname = document.querySelector('input[name=surname]');
    let patronymic = document.querySelector('input[name=patronymic]');
    let dateBirth = document.querySelector('input[name=dateBirth]');
    let startLearn = document.querySelector('input[name=startLearn]');
    let faculty = document.querySelector('input[name=faculty]');


    let divName = name.previousElementSibling;
    let divSurname = surname.previousElementSibling;
    let divPatronymic = patronymic.previousElementSibling;
    let divDateBirth = dateBirth.previousElementSibling;
    let divStartLearn = startLearn.previousElementSibling;
    let divFaculty = faculty.previousElementSibling;

    event.preventDefault();

    let ch = 0;
    //Валидация формы
    if (name.value == '') {
        divName.classList.add('active');
    } else {
        divName.classList.remove('active');
        ch++;
    }
    if (surname.value == '') {
        divSurname.classList.add('active');
    } else {
        divSurname.classList.remove('active');
        ch++;
    }
    if (patronymic.value == '') {
        divPatronymic.classList.add('active');
    } else {
        divPatronymic.classList.remove('active');
        ch++;
    }
    if (dateBirth.value == '' || (new Date(dateBirth.value) <= new Date(1900, 00, 01)) || (new Date(dateBirth.value) > new Date())) {
        divDateBirth.classList.add('active');
    } else {
        divDateBirth.classList.remove('active');
        ch++;
    }
    if (startLearn.value == '' || (new Date(startLearn.value) <= new Date(2000, 00, 01)) || (new Date(startLearn.value) > new Date())) {
        divStartLearn.classList.add('active');
    } else {
        divStartLearn.classList.remove('active');
        ch++;
    }
    if (faculty.value == '') {
        divFaculty.classList.add('active');
    } else {
        divFaculty.classList.remove('active');
        ch++;
    }

    if(ch == 6) {
        arr.push(
            { name: name.value, surname: surname.value, patronymic: patronymic.value, startEd: new Date(startLearn.value), fac: faculty.value, birthday: new Date(dateBirth.value) }
        )
        document.querySelector('.table').remove();
        name.value = '';
        surname.value = '';
        patronymic.value = '';
        dateBirth.value = '';
        startLearn.value = '';
        faculty.value = '';
        createTable();
    }
}

// Создание таблицы
function createTable() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let thName = document.createElement('th');
    let thFaculty = document.createElement('th');
    let thAge = document.createElement('th');
    let thEducation = document.createElement('th');

    table.classList.add('table');
    thName.textContent = 'ФИО';
    thFaculty.textContent = 'Факультет';
    thAge.textContent = 'Дата рождения и возраст';
    thEducation.textContent = 'Годы обучения и номер курса';

    thead.append(thName);
    thead.append(thFaculty);
    thead.append(thAge);
    thead.append(thEducation);
    table.append(thead);

    //Создание таблицы студентов
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            var tr = document.createElement('tr');
            let tdName = document.createElement('td');
            let tdStartEd = document.createElement('td');
            let tdFac = document.createElement('td');
            let tdBirthday = document.createElement('td');

            //Номер курса
            let courseEd;
            //console.log(arr[i]['startEd'])
            if ((new Date().getFullYear() - arr[i]['startEd'].getFullYear()) > 4) {
                courseEd = '(Закончил)';
            } else if ((new Date().getFullYear() - arr[i]['startEd'].getFullYear()) <= 0) {
                courseEd = '(1 курс)';
            } else {
                courseEd = `(${new Date().getFullYear() - arr[i]['startEd'].getFullYear()} курс)`;
            }

            //Годы обучения
            let yearEd = `${arr[i]['startEd'].getFullYear()} - ${arr[i]['startEd'].getFullYear() + 4} `;

            //Дата рождения
            let birthday = arr[i]['birthday'].getDate() + '.' + arr[i]['birthday'].getMonth() + '.' + arr[i]['birthday'].getFullYear();
            //Возраст
            let age = ` (${new Date().getFullYear() - arr[i]['birthday'].getFullYear()} лет)`;

            tdName.textContent = arr[i]['surname'] + ' ' + arr[i]['name'] + ' ' + arr[i]['patronymic'];
            tdFac.textContent = arr[i]['fac'];
            tdBirthday.textContent = birthday + age;
            tdStartEd.textContent = yearEd + courseEd;

            tr.append(tdName);
            tr.append(tdFac);
            tr.append(tdBirthday);
            tr.append(tdStartEd);
            table.append(tr);
            headApp.insertAdjacentElement('afterEnd', table);
        }
    }
}

//Форма сортировки
function createSort() {
    let formSort = document.createElement('form');
    let headSort = document.createElement('h2');
    let inputFio = document.createElement('input');
    let inputFac = document.createElement('input');
    let inputStartEd = document.createElement('input');
    let inputEndEd = document.createElement('input');

    headSort.textContent = 'Поиск студента';
    formSort.classList.add('form-control', 'form__sort');
    inputFio.placeholder = 'ФИО студента';
    inputFac.placeholder = 'Факультет';
    inputStartEd.placeholder = 'Год начала обучения';
    inputEndEd.placeholder = 'Год окончания обучения';
    inputFio.classList.add('form-control');
    inputFac.classList.add('form-control');
    inputStartEd.classList.add('form-control');
    inputEndEd.classList.add('form-control');

    formSort.append(headSort);
    formSort.append(inputFio);
    formSort.append(inputFac);
    formSort.append(inputStartEd);
    formSort.append(inputEndEd);
    root.prepend(formSort);
}

//Показать форму добавления студента
function showAddForm() {
    createAddForm();
    this.removeEventListener('click', showAddForm);
    this.style.display = 'none';
}

//Показать сортировку
function showSort() {
    createSort();
    this.removeEventListener('click', showSort);
    this.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {

    headApp.textContent = 'Список студентов';
    headApp.classList.add('title');
    root.append(headApp);
    createTable();
    let btnShowForm = document.createElement('button');
    btnShowForm.classList.add('btn', 'btn-primary');
    btnShowForm.textContent = 'Добавить студента';
    let btnShowSort = document.createElement('button');
    btnShowSort.classList.add('btn', 'btn-primary');
    btnShowSort.textContent = 'Поиск';
    root.append(btnShowForm);
    root.append(btnShowSort);

    //Показать форму добавления студента
    btnShowForm.addEventListener('click', showAddForm);

    //Показать форму поиска
    btnShowSort.addEventListener('click', showSort);
})