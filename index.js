const NNConfigs = [
    ["Текстовые нейросети",[
        ["ChatGPT",`ChatGPT - заранее обученная модель для работы с текстом, 
        полезен в объяснении темы, составления заданий, и советов по различным темам.`],

        ["Yoodli",`Развивает способности коммуникаций, избавляет от слов-паразитов.`],

        ["Turnitin",`Проверяет работу на антиплагиат, а также на использование других нейросетей.`],

        ["Paperpal",`Проверяет текст на ошибки, и делает более академическим.`],

        ["Grammarly",`Улучшает грамматику на английском языке, путём перефразирования предложений.`]
    ]],
    ["Визуальные нейросети",[
        ["Interview Warmup",`Виртуальные тренировочные собеседования в Google.`],

        ["Beautiful AI",`Предоставляет возможность создать простую презентацию на любые темы.`],

        ["Descript",`Редактирование видео с помощью ИИ.`],

        ["Hitpaw",`Улучшает качество фотографий.`],

        ["Midjourney",`Создаёт различные рисунки по запросу.`]
    ]],
    ["Звуковые нейросети",[
        ["Murf.AI",`Лучшая озвучка голосом ИИ.`],

        ["Aiva.AI",`Генерирует музыку по запросу.`]
    ]]
]

const InfoConfig = [
    [
        ["Название",`Текст`,"Ссылка"]
    ],
    [
        ["Как работать с интерактивными тетрадями в Skysmart?",
        `Чрезвычайные обстоятельства заставляют решать проблемы 
и вызовы энергично и кардинально. Причём так в последнее 
время работает не только правительство. Онлайн-школа  
Skysmart (школьное направление онлайн школы английского языка Skyeng) 
и издательская группа «Просвещение» в рекордные сроки разработали бесплатные 
интерактивные рабочие тетради по основным учебным предметам. Школьники смогут 
с комфортом продолжить свое обучение по официальным учебным материалам в онлайн-формате.`,
        "http://didaktor.ru/category/v-pomosh-uchitelyu/informatika/"],
        ["AXMA STORY MAKER — Программа для создания интерактивных историй, квестов.",
        `Несмотря на разгар лета, обратил внимание на сравнительно высокую посещаемость Дидактора. 
        Это безусловно обязывает публиковать новые статьи, искать новые приложения и сервисы, полезные для образования. 
        Программа, о которой пойдёт ниже, наверняка заинтересует творческих педагогов.
        AXMA Story Maker — это специальная платформа для разработки интерактивных историй и текстовых игр, 
        интерактивной литературы. Она абсолютно бесплатна. Части истории представлены в виде блоков. 
        Связи между ними показаны в виде линий, соединяющих блоки.`,
        "http://didaktor.ru/%ef%bb%bfaxma-story-maker-programma-dlya-sozdaniya-interaktivnyx-istorij-kvestov-i-didakticheskix-igr/"]
    ],
    [
        ["Название",`Текст`,"Ссылка"]
    ]
]



































function addInformationToPage(config, containerId) {
    var container = document.getElementById(containerId);

    config.forEach(function (item,i) {
        var div = document.createElement("div");
        div.classList.add("infel");
        if(i % 3 != 0) div.classList.add(i % 3 == 2 ? "iblue" : "igreen");

        var h2 = document.createElement("h2");
        h2.textContent = item[0];
        div.appendChild(h2);

        var p = document.createElement("p");
        p.textContent = item[1];
        div.appendChild(p);

        var a = document.createElement("a");
        a.href = item[2];
        a.textContent = "Читать дальше..";
        div.appendChild(a);

        container.appendChild(div);
    });
}

NNConfigs.forEach(function (section) {
    var sectionName = section[0];
    var networks = section[1];

    var sectionDiv = document.getElementById("neurals");

    var h2 = document.createElement("h2");
    h2.textContent = sectionName;
    sectionDiv.appendChild(h2);

    var sublistDiv = document.createElement("div");
    sublistDiv.classList.add("sublist");

    networks.forEach(function (network) {
        var networkDiv = document.createElement("div");
        networkDiv.classList.add("neuel");

        var h2 = document.createElement("h2");
        h2.textContent = network[0];
        networkDiv.appendChild(h2);

        var a = document.createElement("a");
        a.textContent = network[1];
        networkDiv.appendChild(a);

        sublistDiv.appendChild(networkDiv);
    });

    sectionDiv.appendChild(sublistDiv);
});

addInformationToPage(InfoConfig[0], "students");
addInformationToPage(InfoConfig[1], "teachs");
addInformationToPage(InfoConfig[2], "general");