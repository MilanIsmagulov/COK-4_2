window.dataLoaded = false;
let title_of_eom = themeOfDEC;
const data = {
    "index_1":{
        "subtitle": "Как называется вид тарелок, представленных на рисунке:",
        "step_of_popup": "Как называется вид тарелок, представленных на рисунке",
        "test":[
            {"type": 1},
            {"answers": [
                "Ситчатые",
                "Жалюзные",
                "Колпачковые"
            ]},
            {"correct_answer": [1]},
            {"image": true, "image_path": "./content/tests_content/01_01.png"}
        ],
    },
    "index_2":{
        "subtitle": "Какое оборудование предназначено для регенерации пропана:",
        "step_of_popup": "Какое оборудование предназначено для регенерации пропана",
        "test":[
            {"type": 1},
            {"answers": [
                "Экстрактор",
                "Испаритель",
                "Отпарная колонна",
                "Колонна-конденсатор смешивания"
            ]},
            {"correct_answer": [1,2]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_3":{
        "subtitle": "Какие примеси могут влиять на характеристики растворителя:",
        "step_of_popup": "Какие примеси могут влиять на характеристики растворителя",
        "test":[
            {"type": 1},
            {"answers": [
                "Пентан",
                "Бутан",
                "Этан",
                "Метан",
                "Олефины"
            ]},
            {"correct_answer": [1,2,4]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_4":{
        "subtitle": "Установите соответствие между оборудованием процессов деасфальтизации  и его назначением.",
        "step_of_popup": "Установите соответствие между оборудованием процессов деасфальтизации  и его назначением",
        "test":[
            {"type": 6},
            {"image": "./content/tests_content/03_01_0002.png"},
            {"answers": [
            ['Разделение сырья'],
            ['Регенерация пропана'],
            ['Отпаривание пропана'],
            ['Обезвоживание пропана'],
            ['Нагрев асфальтового раствора'],
            ]},
            {"columns": ["Экстрактор","Испаритель","Отпарная колонна","Колонна–конденсатор <br> смешивания","Печь"]}
        ],
    },
    "index_5":{
        "subtitle": "Определите последовательность процессов, протекающих на установке деасфальтизации.",
        "step_of_popup": "Определите последовательность процессов, протекающих на установке деасфальтизации",
        "test":[
            {"type": 3},
            {"image": false, "image_path": "./content/video/test_video.mp4"},
            {"answers": [
                "Нагрев сырья",
                "Деасфальтизация",
                "Регенерация пропана",
                "Обезвоживание пропана"
            ]}
        ],
    },
    "index_6":{
        "subtitle": "Установите соответствие между названием веществ, используемых в процессе деасфальтизации, и их назначением.",
        "step_of_popup": "Установите соответствие между названием веществ, используемых в процессе деасфальтизации, и их назначением",
        "test":[
            {"type": 6},
            {"image": "./content/tests_content/03_01_0002.png"},
            {"answers": [
            ['Сырье'],
            ['Целевой продукт'],
            ['Побочный продукт'],
            ['Растворитель']
            ]},
            {"columns": ["Гудрон","Деасфальтизат","Асфальт","Жидкий пропан"]}
        ],
    },
    "index_7":{
        "subtitle": "Как влияет на процесс деасфальтизации повышенное содержание бутана в растворителе:",
        "step_of_popup": "Как влияет на процесс деасфальтизации повышенное содержание бутана в растворителе",
        "test":[
            {"type": 1},
            {"answers": [
                "Снижается селективность процесса",
                "Увеличивается селективность процесса",
                "Ухудшается качество деасфальтизата",
                "Повышается давление в экстракторе и системе регенерации"
            ]},
            {"correct_answer": [0,2]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_8":{
        "subtitle": "Как влияет на процесс деасфальтизации повышенное содержание олефинов:",
        "step_of_popup": "Как влияет на процесс деасфальтизации повышенное содержание олефинов",
        "test":[
            {"type": 1},
            {"answers": [
                "Снижается селективность процесса",
                "Увеличивается селективность процесса",
                "Ухудшается качество деасфальтизата",
                "Повышается давление в экстракторе и системе регенерации"
            ]},
            {"correct_answer": [0,2]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_9":{
        "subtitle": "Как влияет на процесс деасфальтизации повышенное содержание бутана в растворителе:",
        "step_of_popup": "Как влияет на процесс деасфальтизации повышенное содержание бутана в растворителе",
        "test":[
            {"type": 1},
            {"answers": [
                "Снижается селективность процесса",
                "Увеличивается селективность процесса",
                "Ухудшается качество деасфальтизата",
                "Повышается давление в экстракторе и системе регенерации"
            ]},
            {"correct_answer": [1,3]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_10":{
        "subtitle": "Какие оперативные параметры влияют на протекание процесса деасфальтизации:",
        "step_of_popup": "Какие оперативные параметры влияют на протекание процесса деасфальтизации",
        "test":[
            {"type": 1},
            {"answers": [
                "Температура верха и низа экстрактора",
                "Кратность растворитель: сырье",
                "Давление в экстракторе",
                "Температура сырья"
            ]},
            {"correct_answer": [0,1]},
            {"image": false, "image_path": "./content/video/test_video.mp4"}
        ],
    },
    "index_11":{
        "subtitle": "Укажите элементы жалюзной тарелки, соответствующие номерам на схеме:",
        "step_of_popup": "Укажите элементы жалюзной тарелки  соответствующие номерам на схеме",
        "test":[
            {"type": 3},
            {"image": true, "image_path": "./content/tests_content/01_01.png"},
            {"answers": [
                "Пластина",
                "Дистанционные ребра",
                "Уголок",
                "Балка опорная",
                "Направляющая стойка"
            ]}
        ],
    },
    "index_12":{
        "subtitle": "Найдите соответствие высоты экстракционной колонны и ее диаметра.",
        "step_of_popup": "Найдите соответствие высоты экстракционной колонны и ее диаметра",
        "test":[
            {"type": 6},
            {"image": "./content/tests_content/03_01_0002.png"},
            {"answers": [
            ['Высота 40 м'],
            ['Высота 80 м'],
            ['Высота 20 м']
            ]},
            {"columns": ["Диаметр 5 м","Диаметр 10 м","Диаметр 1 м"]}
        ],
    },
    "index_13":{
        "subtitle": "Установите соответствие между номером потока на предложенной схеме и названием вещества.",
        "step_of_popup": "Установите соответствие между номером потока на предложенной схеме и названием вещества",
        "test":[
            {"type": 3},
            {"image": true, "image_path": "./content/tests_content/13_01.png"},
            {"answers": [
                "Гудрон",
                "Асфальт",
                "Деасфальтизат",
                "NaOH",
                "Вода",
                "Водяной пар",
                "Пропан"
            ]}
        ],
    },
    "index_14":{
        "subtitle": "Установите соответствие между условным обозначением оборудования на предложенной схеме и его названием.",
        "step_of_popup": "Установите соответствие между условным обозначением оборудования на предложенной схеме и его названием",
        "test":[
            {"type": 9},
            {"description": " "},
            {"definitions": [
                "К-1",
                "Е-1",
                "П-1",
                "К-2, К-3",
                "Э-1,2"
            ]},
            {"answers": [
                "Экстракционная колонна",
                "Печь",
                "Емкость",
                "Отпарная колонна",
                "Испаритель"
            ]},
            {"correct_answer_type_10": [1, 3, 2, 4, 5]},
            {"image": true, "image_path": "./content/tests_content/14_01.png", "image_sgn": " "}
        ],
    },
    "index_15":{
        "subtitle": "Установите соответствие элементов конструкции экстракционной колонны и их названий.",
        "step_of_popup": "Установите соответствие элементов конструкции экстракционной колонны и их названий",
        "test":[
            {"type": 3},
            {"image": true, "image_path": "./content/tests_content/15_01.png"},
            {"answers": [
                "Крышка",
                "Тарелка",
                "Корпус",
                "Коллектор"
            ]}
        ],
    },
    "index_16":{
        "subtitle": "Результаты",
        "step_of_popup": "Результаты",
        "result":[]
    },
}
window.dataLoaded = true;