const root = document.getElementById('root');
let headApp = document.createElement('h1');

let arr = [
    { name: 'Павел', surname: 'Лукьянов', patronymic: 'Александрович', startEd: 2015, fac: 'УТС', birthday: new Date(1996, 04, 21) },
    { name: 'Денис', surname: 'Сахаров', patronymic: 'Викторович', startEd: 2020, fac: 'Программист', birthday: new Date(2000, 08, 29) },
    { name: 'Игорь', surname: 'Николаев', patronymic: 'Сергеевич', startEd: 2022, fac: 'Физика', birthday: new Date(1990, 01, 11) },
]

let arrSort = [];

// Создание формы для добавления студента
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
    let spanDateBirth2 = document.createElement('span');
    let spanStartLearn = document.createElement('span');
    let spanStartLearn2 = document.createElement('span');
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
    spanDateBirth2.classList.add('form__warning');
    spanDateBirth2.textContent = 'Введите дату в диапазоне от 01.01.1900 до текущей даты';
    divDateBirth.append(spanDateBirth2);
    divDateBirth.classList.add('input__container');
    divDateBirth.append(spanDateBirth2);
    divDateBirth.append(dateBirth);

    startLearn.type = 'number';
    startLearn.name = 'startLearn';
    startLearn.classList.add('form-control');
    divStartLearn.textContent = 'Начало обучения';
    spanStartLearn.textContent = 'Заполните поле "Начало обучения"';
    spanStartLearn.classList.add('form__warning');
    divStartLearn.append(startLearn);
    divStartLearn.classList.add('input__container');
    spanStartLearn2.textContent = 'Введите дату в диапазоне от 2000-го года до текущего года';
    spanStartLearn2.classList.add('form__warning');
    divStartLearn.append(spanStartLearn);
    divStartLearn.append(spanStartLearn2);
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
    let divDateBirth = dateBirth.previousElementSibling.previousElementSibling;
    let divDateBirth2 = dateBirth.previousElementSibling;
    let divStartLearn = startLearn.previousElementSibling.previousElementSibling;
    let divStartLearn2 = startLearn.previousElementSibling;
    let divFaculty = faculty.previousElementSibling;

    event.preventDefault();

    //Валидация формы
    let ch = 0;
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
    if (dateBirth.value == '') {
        divDateBirth.classList.add('active');
    } else {
        divDateBirth.classList.remove('active');
        ch++;
    }
    if ((new Date(dateBirth.value) <= new Date(1900, 00, 01)) || (new Date(dateBirth.value) > new Date())) {
        divDateBirth2.classList.add('active-date');
    } else {
        divDateBirth2.classList.remove('active-date');
        ch++;
    }
    if (startLearn.value == '') {
        divStartLearn.classList.add('active');
    } else {
        divStartLearn.classList.remove('active');
        if (+startLearn.value < 2000 || +startLearn.value > new Date().getFullYear()) {
            divStartLearn2.classList.add('active-date');
        } else {
            divStartLearn2.classList.remove('active-date');
            ch++;
        }
    }
    if (faculty.value == '') {
        divFaculty.classList.add('active');
    } else {
        divFaculty.classList.remove('active');
        ch++;
    }

    if (ch == 7) {
        arr.push(
            { name: name.value, surname: surname.value, patronymic: patronymic.value, startEd: +startLearn.value, fac: faculty.value, birthday: new Date(dateBirth.value) }
        )
        document.querySelector('.table').remove();
        name.value = '';
        surname.value = '';
        patronymic.value = '';
        dateBirth.value = '';
        startLearn.value = '';
        faculty.value = '';
        createTable(arr);
    }
}

// Создание таблицы
function createTable(arr) {
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
            if ((new Date().getFullYear() - arr[i]['startEd']) > 4) {
                courseEd = '(Закончил)';
            } else if ((new Date().getFullYear() - arr[i]['startEd']) <= 0) {
                courseEd = '(1 курс)';
            } else {
                courseEd = `(${new Date().getFullYear() - arr[i]['startEd']} курс)`;
            }

            //Годы обучения
            let yearEd = `${arr[i]['startEd']} - ${arr[i]['startEd'] + 4} `;

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

//Создание формы сортировки
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
    inputFio.dataset.sort = 'fio';
    inputFac.placeholder = 'Факультет';
    inputFac.dataset.sort = 'fac';
    inputStartEd.placeholder = 'Год начала обучения';
    inputStartEd.dataset.sort = 'startEd';
    inputEndEd.placeholder = 'Год окончания обучения';
    inputEndEd.dataset.sort = 'endEd';
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
    sort(arr);
}

//Сортировка
function sort() {
    let sorts = document.querySelectorAll('input[data-sort]');
    sorts.forEach(e => {
        e.addEventListener('input', function () {

            switch (this.dataset.sort) {
                case 'fio': console.log('fio');
                    break;
                case 'fac':
                    arr.forEach(el => {
                        if (this.value.includes(el['fac'])) {
                            document.querySelector('.table').remove();
                            arrSort.push(el);
                            createTable(arrSort);
                        } else {
                            arrSort = [];
                            document.querySelector('.table').remove();
                            createTable(arr);
                            console.log('fac');
                        }
                    })
                    break;
                case 'startEd':
                    arr.forEach(el => {
                        if (+this.value == (el['startEd'])) {
                            document.querySelector('.table').remove();
                            arrSort.push(el);
                            createTable(arrSort);
                        } else {
                            arrSort = [];
                            document.querySelector('.table').remove();
                            createTable(arr);
                            console.log('startEd');
                        }
                    })
                    break;
                case 'endEd':
                    arr.forEach(el => {
                        if (+this.value == (el['startEd'] + 4)) {
                            document.querySelector('.table').remove();
                            arrSort.push(el);
                            createTable(arrSort);
                        } else {
                            arrSort = [];
                            document.querySelector('.table').remove();
                            createTable(arr);
                            console.log('endEd');
                        }
                    })
                    break;
            }


            /* if (this.dataset.sort == 'fio') {
                console.log('fio');
            }
            if (this.dataset.sort === 'fac') {
                arr.forEach(el => {
                    if (this.value.includes(el['fac'])) {
                        document.querySelector('.table').remove();
                        arrSort.push(el);
                        createTable(arrSort);
                    } else {
                        arrSort = [];
                        document.querySelector('.table').remove();
                        createTable(arr);
                    }
                })
            } else if (this.dataset.sort == 'startEd') {
                arr.forEach(el => {
                    if (+this.value == (el['startEd'])) {
                        document.querySelector('.table').remove();
                        arrSort.push(el);
                        createTable(arrSort);
                    } else {
                        arrSort = [];
                        document.querySelector('.table').remove();
                        createTable(arr);
                    }
                })
            } else if (this.dataset.sort == 'endEd') {
                arr.forEach(el => {
                    if (+this.value == (el['startEd'] + 4)) {
                        document.querySelector('.table').remove();
                        arrSort.push(el);
                        createTable(arrSort);
                    } else {
                        arrSort = [];
                        document.querySelector('.table').remove();
                        createTable(arr);
                    }
                })
            } */
        });
    })
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
    createTable(arr);
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