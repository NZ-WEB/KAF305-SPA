const heroTabs =  [
  {
    title: 'Роботизированная система охраны ВС',
    fullTitle: 'Роботизированная система охраны ВС',
    icon: 'precision_manufacturing',
    textContent: {
      text: [
        `Система патрулирования и охраны воздушных судов на основе интеллектуального автономного робота предназначена
      для создания дополнительного уровня безопасности в аэропортах. Её внедрение позволит сократить риски противоправных действий,
      в том числе террористической направленности, а также усилить контроль за персоналом, допущенным к непосредственной работе с
      воздушными судами. Роботизированная система безопасности может быть широко использована в целом ряде задач по обеспечению
      безопасности не только на стоянках воздушных судов, но и в городской среде.`,
        `Робот осуществляет проезд по заданному маршруту вокруг охраняемого объекта в автоматическом режиме.
        Маршрут движения задаётся с пульта оператора. Для определения координат робота используется комплексная навигационная система
        с использованием приемника спутниковой навигации, лазерного сканирующего дальномера, одометров и микромеханических датчиков.
        В системе используется современная технология повышения точности данных координат спутниковой навигации (RTK). Для объезда
        препятствий используются лазерный сканирующий дальномер, ультразвуковые датчики, а также оптические сенсоры (TOF). Положение робота
        в реальном времени транслируется на пульт оператора.`
      ],
      pictures: [
        [
          'http://join.kaf305mai.ru/images/research_and_development/robot_carousel/render4.jpg',
          'http://join.kaf305mai.ru/images/research_and_development/robot_carousel/render5.jpg',
          'http://join.kaf305mai.ru/images/research_and_development/robot_carousel/maks_1.jpg'
        ],
        [
          'http://join.kaf305mai.ru/images/research_and_development/robot_carousel/robot.gif',
          'http://join.kaf305mai.ru/images/research_and_development/robot_carousel/airoport.jpg',
          'http://join.kaf305mai.ru/images/research_and_development/robot_carousel/army.jpg'
        ],

      ],
      qrCode: {
        src: 'http://qrcoder.ru/code/?https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6jRYPQBJgF4%26t%3D17s&4&0',
        title: 'Обзорное видео комплекса'
      }
    }
  },
  {
    title: 'Испытания навигационных систем',
    fullTitle: 'Мобильная лаборатория испытаний навигационных систем',
    icon: 'flight',
    textContent: {
      text: [],
      list: {
        title: 'Направления учебной работы и научных исследований:',
        items: [
          '• Исследование свойств навигационных систем и датчиков в натурных условиях.',
          '• Калибровка навигационных систем и датчиков в условиях натурных испытаний.',
          '• Испытания навигационных систем и датчиков на автомобиле в условиях приближенных к натурным.'
        ]
      },
      list2: {
        title: 'Состав специализированного оборудования:',
        items: [
          '• Регистратор',
          '• Эталонная навигационная система',
          '• Базовая станция ГЛОНАСС/GPS',
          '• Блок Wi-Fi',
          '• ПО Inertial Explorer',
          '• ПО постобработки навигационных измерений',
        ]
      },
    }
  },
  {
    title: 'IT - инфраструктура кафедры',
    icon: 'code',
    textContent: {
      list: {
        title: 'На кафедре реализована современная IT инфраструктура, включающая в себя:',
        items: [
          '• Высокоскоростную локальную сеть',
          '• Бесшовные сети Wi-Fi для сотрудников и студентов',
          '• Облачные вычислительные сервисы и сервисы хранения данных',
          '• Интерактивная информационная доска',
        ]
      },
      list2: {
        title: 'Доступные сервисы:',
        items: [
          '• Облачное хранилице "Seafile"',
          '• Сервер контроля версий git на базе Gitlab',
          '• Сервер виртуальных машин',
          '• Веб IDE Jupyter',
        ]
      },
    }
  },
  {
    title: 'База для олимпиады НТИ',
    fullTitle: 'База для олимпиады НТИ',
    icon: 'event',
    textContent: {
      text: [
        'Московский авиационный институт на базе кафедры 305 и отдела автоматизации эксперимента (ОАЭ) института №3 регулярно проводит олимпиаду НТИ – Всероссийскую инженерную олимпиаду – по профилю «Беспилотные авиационные системы».',
        'Профиль «Беспилотные авиационные системы» – техническая и инновационная деятельность в области проектирования систем управления беспилотными летательными аппаратами (БПЛА). Особое внимание уделяется организации процесса разработки автопилота, при котором возможна практическая проверка разработанных программ в ходе летных испытаний на аэродроме. Руководитель профиля – доцент кафедры 305 Сурков Д.А.',
        'В финале олимпиады команды создают и настраивают автопилот с помощью симулятора полёта, разработанного сотрудниками кафедры 305 и ОАЭ института №3 для выведения дрона в нужную точку в автоматическом режиме при реальном полёте на маёвском аэродроме «Алферьево».',
      ],
    }
  },
];

export default heroTabs;
