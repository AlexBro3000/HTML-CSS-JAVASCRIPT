const sort_array =
{
	Name: 'Название корабля',
	Type: 'Тип корабля',
	State: 'Государство',
	Price: 'Стоимость',
	HullStrength: 'Запас прочности корпуса',
	Cargo: 'Вместимость грузового отсека',
	DroneCompartment: 'Объем отсека для дронов',
	TControlChannel: 'Пропускная способность канала телеуправления',
	ArmorStrength: 'Запас прочности брони',
	ShieldStrength: 'Запас прочности щита',
	ShieldRegen: 'Время регенерации щитов',
	Capacity: 'Емкость накопителя',
	EnergyRegen: 'Время востановления заряда',
	CaptureRange: 'Дальность захвата цели',
	Amount: 'Количество захваченных целей',
	Speed: 'Максимальная скорость',
	SpeedWarp: 'Скорость в варп-режиме',
	CPU: 'Мощность ЦПУ',
	Reactor: 'Мощность реактора',
	PGun: 'Орудийные установки',
	PLauncher: 'Пусковые установки',
	CHPower: 'Разъемы большой мощности',
	CMPower: 'Разъемы средней мощности',
	CLPower: 'Разъемы малой мощности'
}

const table_array = 
{
  Impairor: {
    Name: 'Impairor',      Type: 'Корвет',
    State: 'Amarr',        Price: '0',
    Description: '',
    HullStrength: '200',   Cargo: '115',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '200',  ShieldStrength: '125',
    ShieldRegen: '519',    Capacity: '140',
    EnergyRegen: '70',     CaptureRange: '25.5',
    Amount: '3',           Speed: '300',
    SpeedWarp: '3',        CPU: '120',
    Reactor: '26',         PGun: '2',
    PLauncher: '1',        CHPower: '2',
    CMPower: '2',          CLPower: '2'
  },
  Velator: {
    Name: 'Velator',        Type: 'Корвет',
    State: 'Gallente',      Price: '0',
    Description: '',
    HullStrength: '225',    Cargo: '135',
    DroneCompartment: '10', TControlChannel: '10',
    ArmorStrength: '175',   ShieldStrength: '150',
    ShieldRegen: '625',     Capacity: '135',
    EnergyRegen: '67.5',    CaptureRange: '23.5',
    Amount: '3',            Speed: '305',
    SpeedWarp: '3',         CPU: '125',
    Reactor: '25',          PGun: '2',
    PLauncher: '1',         CHPower: '2',
    CMPower: '2',           CLPower: '2'
  },
  Ibis: {
    Name: 'Ibis',          Type: 'Корвет',
    State: 'Caldari',      Price: '0',
    Description: '',
    HullStrength: '175',   Cargo: '125',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '125',  ShieldStrength: '200',
    ShieldRegen: '860',    Capacity: '130',
    EnergyRegen: '65',     CaptureRange: '27',
    Amount: '3',           Speed: '295',
    SpeedWarp: '3',        CPU: '135',
    Reactor: '23',         PGun: '2',
    PLauncher: '2',        CHPower: '2',
    CMPower: '2',          CLPower: '2'
  },
  Reaper: {
    Name: 'Reaper',        Type: 'Корвет',
    State: 'Minmatar',     Price: '0',
    Description: '',
    HullStrength: '150',   Cargo: '120',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '150',  ShieldStrength: '175',
    ShieldRegen: '730',    Capacity: '125',
    EnergyRegen: '62.5',   CaptureRange: '22',
    Amount: '3',           Speed: '310',
    SpeedWarp: '3',        CPU: '130',
    Reactor: '24',         PGun: '2',
    PLauncher: '2',        CHPower: '2',
    CMPower: '2',          CLPower: '2'
  },
  Magnate: {
    Name: 'Magnate',        Type: 'Фрегат',
    State: 'Amarr',         Price: '554000',
    Description: '',
    HullStrength: '250',    Cargo: '400',
    DroneCompartment: '40', TControlChannel: '15',
    ArmorStrength: '350',   ShieldStrength: '250',
    ShieldRegen: '625',     Capacity: '325',
    EnergyRegen: '180',     CaptureRange: '34',
    Amount: '4',            Speed: '350',
    SpeedWarp: '5',         CPU: '230',
    Reactor: '26',          PGun: '2',
    PLauncher: '2',         CHPower: '3',
    CMPower: '3',           CLPower: '4'
  },
  Tormentor: {
    Name: 'Tormentor',      Type: 'Фрегат',
    State: 'Amarr',         Price: '517000',
    Description: '',
    HullStrength: '400',    Cargo: '130',
    DroneCompartment: '20', TControlChannel: '10',
    ArmorStrength: '500',   ShieldStrength: '350',
    ShieldRegen: '625',     Capacity: '425',
    EnergyRegen: '212.5',   CaptureRange: '40',
    Amount: '4',            Speed: '335',
    SpeedWarp: '5',         CPU: '130',
    Reactor: '50',          PGun: '3',
    PLauncher: '0',         CHPower: '3',
    CMPower: '3',           CLPower: '4'
  },
  Punisher: {
    Name: 'Punisher',      Type: 'Фрегат',
    State: 'Amarr',        Price: '536000',
    Description: '',
    HullStrength: '450',   Cargo: '135',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '500',  ShieldStrength: '350',
    ShieldRegen: '625',    Capacity: '400',
    EnergyRegen: '160',    CaptureRange: '25',
    Amount: '4',           Speed: '355',
    SpeedWarp: '5',        CPU: '140',
    Reactor: '67',         PGun: '4',
    PLauncher: '0',        CHPower: '4',
    CMPower: '2',          CLPower: '5'
  },
  Crucifier: {
    Name: 'Crucifier',      Type: 'Фрегат',
    State: 'Amarr',         Price: '381000',
    Description: '',
    HullStrength: '350',    Cargo: '265',
    DroneCompartment: '45', TControlChannel: '15',
    ArmorStrength: '400',   ShieldStrength: '250',
    ShieldRegen: '625',     Capacity: '330',
    EnergyRegen: '180',     CaptureRange: '64',
    Amount: '6',            Speed: '350',
    SpeedWarp: '5',         CPU: '235',
    Reactor: '27',          PGun: '2',
    PLauncher: '0',         CHPower: '3',
    CMPower: '4',           CLPower: '3'
  },
  Executioner: {
    Name: 'Executioner',   Type: 'Фрегат',
    State: 'Amarr',        Price: '399000',
    Description: '',
    HullStrength: '350',   Cargo: '115',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '450',  ShieldStrength: '250',
    ShieldRegen: '625',    Capacity: '360',
    EnergyRegen: '180',    CaptureRange: '27.5',
    Amount: '4',           Speed: '410',
    SpeedWarp: '5',        CPU: '140',
    Reactor: '45',         PGun: '3',
    PLauncher: '0',        CHPower: '4',
    CMPower: '3',          CLPower: '3'
  },
  Inquisitor: {
    Name: 'Inquisitor',    Type: 'Фрегат',
    State: 'Amarr',        Price: '492000',
    Description: '',
    HullStrength: '330',   Cargo: '250',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '500',  ShieldStrength: '225',
    ShieldRegen: '625',    Capacity: '675',
    EnergyRegen: '337',    CaptureRange: '36',
    Amount: '7',           Speed: '405',
    SpeedWarp: '5',        CPU: '135',
    Reactor: '51',         PGun: '2',
    PLauncher: '0',        CHPower: '3',
    CMPower: '2',          CLPower: '4'
  },
  Navitas: {
    Name: 'Navitas',       Type: 'Фрегат',
    State: 'Gallente',     Price: '133000',
    Description: '',
    HullStrength: '335',   Cargo: '280',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '400',  ShieldStrength: '250',
    ShieldRegen: '625',    Capacity: '595',
    EnergyRegen: '297.5',  CaptureRange: '38',
    Amount: '7',           Speed: '410',
    SpeedWarp: '5',        CPU: '145',
    Reactor: '49',         PGun: '2',
    PLauncher: '0',        CHPower: '3',
    CMPower: '3',          CLPower: '3'
  },
  Tristan: {
    Name: 'Tristan',        Type: 'Фрегат',
    State: 'Gallente',      Price: '563000',
    Description: '',
    HullStrength: '550',    Cargo: '140',
    DroneCompartment: '40', TControlChannel: '25',
    ArmorStrength: '450',   ShieldStrength: '350',
    ShieldRegen: '625',     Capacity: '350',
    EnergyRegen: '175',     CaptureRange: '40',
    Amount: '5',            Speed: '315',
    SpeedWarp: '5',         CPU: '130',
    Reactor: '35',          PGun: '2',
    PLauncher: '0',         CHPower: '3',
    CMPower: '3',           CLPower: '3'
  },
  Incursus: {
    Name: 'Incursus',      Type: 'Фрегат',
    State: 'Gallente',     Price: '238000',
    Description: '',
    HullStrength: '500',   Cargo: '165',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '450',  ShieldStrength: '400',
    ShieldRegen: '625',    Capacity: '370',
    EnergyRegen: '185',    CaptureRange: '30',
    Amount: '4',           Speed: '340',
    SpeedWarp: '5',        CPU: '135',
    Reactor: '45',         PGun: '3',
    PLauncher: '0',        CHPower: '3',
    CMPower: '3',          CLPower: '4'
  },
  Imicus: {
    Name: 'Imicus',         Type: 'Фрегат',
    State: 'Gallente',      Price: '558000',
    Description: '',
    HullStrength: '275',    Cargo: '400',
    DroneCompartment: '40', TControlChannel: '20',
    ArmorStrength: '325',   ShieldStrength: '275',
    ShieldRegen: '625',     Capacity: '270',
    EnergyRegen: '150.5',   CaptureRange: '35',
    Amount: '4',            Speed: '330',
    SpeedWarp: '5',         CPU: '250',
    Reactor: '21',          PGun: '1',
    PLauncher: '0',         CHPower: '3',
    CMPower: '4',           CLPower: '3'
  },
  Atron: {
    Name: 'Atron',         Type: 'Фрегат',
    State: 'Gallente',     Price: '468000',
    Description: '',
    HullStrength: '400',   Cargo: '145',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '350',  ShieldStrength: '300',
    ShieldRegen: '625',    Capacity: '330',
    EnergyRegen: '165.5',  CaptureRange: '25',
    Amount: '4',           Speed: '420',
    SpeedWarp: '5',        CPU: '147',
    Reactor: '37',         PGun: '3',
    PLauncher: '0',        CHPower: '4',
    CMPower: '3',          CLPower: '3'
  },
  Maulus: {
    Name: 'Maulus',         Type: 'Фрегат',
    State: 'Gallente',      Price: '411000',
    Description: '',
    HullStrength: '400',    Cargo: '275',
    DroneCompartment: '30', TControlChannel: '20',
    ArmorStrength: '350',   ShieldStrength: '300',
    ShieldRegen: '625',     Capacity: '275',
    EnergyRegen: '150',     CaptureRange: '64.5',
    Amount: '6',            Speed: '375',
    SpeedWarp: '5',         CPU: '230',
    Reactor: '28',          PGun: '2',
    PLauncher: '0',         CHPower: '2',
    CMPower: '4',           CLPower: '3'
  },
  Bantam: {
    Name: 'Bantam',        Type: 'Фрегат',
    State: 'Caldari',      Price: '203000',
    Description: '',
    HullStrength: '310',   Cargo: '270',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '225',  ShieldStrength: '500',
    ShieldRegen: '625',    Capacity: '615',
    EnergyRegen: '307',    CaptureRange: '40',
    Amount: '7',           Speed: '370',
    SpeedWarp: '5',        CPU: '200',
    Reactor: '39',         PGun: '2',
    PLauncher: '0',        CHPower: '3',
    CMPower: '4',          CLPower: '2'
  },
  Condor: {
    Name: 'Condor',        Type: 'Фрегат',
    State: 'Caldari',      Price: '500000',
    Description: '',
    HullStrength: '250',   Cargo: '130',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '250',  ShieldStrength: '400',
    ShieldRegen: '625',    Capacity: '300',
    EnergyRegen: '150',    CaptureRange: '30',
    Amount: '4',           Speed: '400',
    SpeedWarp: '5',        CPU: '185',
    Reactor: '35',         PGun: '0',
    PLauncher: '3',        CHPower: '4',
    CMPower: '4',          CLPower: '2'
  },
  Griffin: {
    Name: 'Griffin',       Type: 'Фрегат',
    State: 'Caldari',      Price: '294000',
    Description: '',
    HullStrength: '250',   Cargo: '260',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '250',  ShieldStrength: '400',
    ShieldRegen: '625',    Capacity: '245',
    EnergyRegen: '135',    CaptureRange: '65',
    Amount: '6',           Speed: '325',
    SpeedWarp: '5',        CPU: '240',
    Reactor: '28',         PGun: '0',
    PLauncher: '2',        CHPower: '2',
    CMPower: '5',          CLPower: '2'
  },
  Kestrel: {
    Name: 'Kestrel',       Type: 'Фрегат',
    State: 'Caldari',      Price: '634000',
    Description: '',
    HullStrength: '400',   Cargo: '160',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '350',  ShieldStrength: '500',
    ShieldRegen: '625',    Capacity: '330',
    EnergyRegen: '165',    CaptureRange: '50',
    Amount: '5',           Speed: '325',
    SpeedWarp: '5',        CPU: '180',
    Reactor: '45',         PGun: '0',
    PLauncher: '4',        CHPower: '4',
    CMPower: '4',          CLPower: '2'
  },
  Merlin: {
    Name: 'Merlin',        Type: 'Фрегат',
    State: 'Caldari',      Price: '208000',
    Description: '',
    HullStrength: '400',   Cargo: '150',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '350',  ShieldStrength: '500',
    ShieldRegen: '625',    Capacity: '350',
    EnergyRegen: '175',    CaptureRange: '50',
    Amount: '5',           Speed: '310',
    SpeedWarp: '5',        CPU: '180',
    Reactor: '40',         PGun: '3',
    PLauncher: '0',        CHPower: '3',
    CMPower: '4',          CLPower: '3'
  },
  Heron: {
    Name: 'Heron',          Type: 'Фрегат',
    State: 'Caldari',       Price: '634000',
    Description: '',
    HullStrength: '200',    Cargo: '400',
    DroneCompartment: '35', TControlChannel: '15',
    ArmorStrength: '200',   ShieldStrength: '400',
    ShieldRegen: '625',     Capacity: '245',
    EnergyRegen: '135',     CaptureRange: '37.5',
    Amount: '4',            Speed: '340',
    SpeedWarp: '5',         CPU: '260',
    Reactor: '24',          PGun: '2',
    PLauncher: '2',         CHPower: '3',
    CMPower: '5',           CLPower: '2'
  },
  Slasher: {
    Name: 'Slasher',       Type: 'Фрегат',
    State: 'Minmatar',     Price: '448000',
    Description: '',
    HullStrength: '300',   Cargo: '120',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '300',  ShieldStrength: '350',
    ShieldRegen: '625',    Capacity: '240',
    EnergyRegen: '120',    CaptureRange: '22.5',
    Amount: '4',           Speed: '430',
    SpeedWarp: '5',        CPU: '140',
    Reactor: '36',         PGun: '3',
    PLauncher: '0',        CHPower: '4',
    CMPower: '4',          CLPower: '2'
  },
  Probe: {
    Name: 'Probe',          Type: 'Фрегат',
    State: 'Minmatar',      Price: '591000',
    Description: '',
    HullStrength: '225',    Cargo: '400',
    DroneCompartment: '35', TControlChannel: '15',
    ArmorStrength: '300',   ShieldStrength: '300',
    ShieldRegen: '625',     Capacity: '235',
    EnergyRegen: '130',     CaptureRange: '32.5',
    Amount: '4',            Speed: '360',
    SpeedWarp: '5',         CPU: '240',
    Reactor: '25',          PGun: '2',
    PLauncher: '2',         CHPower: '3',
    CMPower: '4',           CLPower: '3'
  },
  Rifter: {
    Name: 'Rifter',        Type: 'Фрегат',
    State: 'Minmatar',     Price: '320000',
    Description: '',
    HullStrength: '350',   Cargo: '140',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '450',  ShieldStrength: '450',
    ShieldRegen: '625',    Capacity: '250',
    EnergyRegen: '125',    CaptureRange: '22.5',
    Amount: '4',           Speed: '365',
    SpeedWarp: '5',        CPU: '130',
    Reactor: '41',         PGun: '3',
    PLauncher: '2',        CHPower: '3',
    CMPower: '3',          CLPower: '4'
  },
  Breacher: {
    Name: 'Breacher',       Type: 'Фрегат',
    State: 'Minmatar',      Price: '575000',
    Description: '',
    HullStrength: '350',    Cargo: '175',
    DroneCompartment: '10', TControlChannel: '10',
    ArmorStrength: '350',   ShieldStrength: '500',
    ShieldRegen: '625',     Capacity: '300',
    EnergyRegen: '150',     CaptureRange: '35',
    Amount: '4',            Speed: '365',
    SpeedWarp: '5',         CPU: '180',
    Reactor: '37',          PGun: '0',
    PLauncher: '3',         CHPower: '3',
    CMPower: '4',           CLPower: '3'
  },
  Burst: {
    Name: 'Burst',         Type: 'Фрегат',
    State: 'Minmatar',     Price: '170000',
    Description: '',
    HullStrength: '390',   Cargo: '260',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '250',  ShieldStrength: '400',
    ShieldRegen: '625',    Capacity: '560',
    EnergyRegen: '280',    CaptureRange: '34',
    Amount: '7',           Speed: '415',
    SpeedWarp: '5',        CPU: '190',
    Reactor: '40',         PGun: '2',
    PLauncher: '0',        CHPower: '3',
    CMPower: '3',          CLPower: '3'
  },
  Vigil: {
    Name: 'Vigil',         Type: 'Фрегат',
    State: 'Minmatar',     Price: '406000',
    Description: '',
    HullStrength: '300',   Cargo: '250',
    DroneCompartment: '5', TControlChannel: '5',
    ArmorStrength: '300',  ShieldStrength: '350',
    ShieldRegen: '625',    Capacity: '235',
    EnergyRegen: '130',    CaptureRange: '65',
    Amount: '6',           Speed: '410',
    SpeedWarp: '5',        CPU: '225',
    Reactor: '26',         PGun: '0',
    PLauncher: '2',        CHPower: '2',
    CMPower: '5',          CLPower: '2'
  },
  Coercer: {
    Name: 'Coercer',       Type: 'Эсминец',
    State: 'Amarr',        Price: '1190000',
    Description: '',
    HullStrength: '800',   Cargo: '375',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '900',  ShieldStrength: '700',
    ShieldRegen: '625',    Capacity: '700',
    EnergyRegen: '370',    CaptureRange: '30',
    Amount: '6',           Speed: '255',
    SpeedWarp: '4.5',      CPU: '168',
    Reactor: '85',         PGun: '7',
    PLauncher: '0',        CHPower: '8',
    CMPower: '2',          CLPower: '3'
  },
  Dragoon: {
    Name: 'Dragoon',        Type: 'Эсминец',
    State: 'Amarr',         Price: '1150000',
    Description: '',
    HullStrength: '850',    Cargo: '300',
    DroneCompartment: '75', TControlChannel: '25',
    ArmorStrength: '950',   ShieldStrength: '750',
    ShieldRegen: '625',     Capacity: '600',
    EnergyRegen: '275',     CaptureRange: '39',
    Amount: '6',            Speed: '240',
    SpeedWarp: '4.5',       CPU: '155',
    Reactor: '58',          PGun: '3',
    PLauncher: '3',         CHPower: '5',
    CMPower: '3',           CLPower: '4'
  },
  Algos: {
    Name: 'Algos',          Type: 'Эсминец',
    State: 'Gallente',      Price: '1140000',
    Description: '',
    HullStrength: '950',    Cargo: '350',
    DroneCompartment: '60', TControlChannel: '35',
    ArmorStrength: '850',   ShieldStrength: '800',
    ShieldRegen: '625',     Capacity: '550',
    EnergyRegen: '350',     CaptureRange: '42',
    Amount: '7',            Speed: '245',
    SpeedWarp: '4.5',       CPU: '160',
    Reactor: '55',          PGun: '5',
    PLauncher: '0',         CHPower: '6',
    CMPower: '3',           CLPower: '3'
  },
  Catalyst: {
    Name: 'Catalyst',      Type: 'Эсминец',
    State: 'Gallente',     Price: '1130000',
    Description: '',
    HullStrength: '900',   Cargo: '450',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '800',  ShieldStrength: '750',
    ShieldRegen: '625',    Capacity: '650',
    EnergyRegen: '350',    CaptureRange: '33',
    Amount: '7',           Speed: '265',
    SpeedWarp: '4.5',      CPU: '178',
    Reactor: '70',         PGun: '7',
    PLauncher: '0',        CHPower: '8',
    CMPower: '2',          CLPower: '3'
  },
  Corax: {
    Name: 'Corax',         Type: 'Эсминец',
    State: 'Caldari',      Price: '1030000',
    Description: '',
    HullStrength: '750',   Cargo: '450',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '750',  ShieldStrength: '1000',
    ShieldRegen: '625',    Capacity: '500',
    EnergyRegen: '319',    CaptureRange: '45',
    Amount: '7',           Speed: '235',
    SpeedWarp: '4.5',      CPU: '210',
    Reactor: '53',         PGun: '0',
    PLauncher: '7',        CHPower: '7',
    CMPower: '4',          CLPower: '2'
  },
  Cormorant: {
    Name: 'Cormorant',     Type: 'Эсминец',
    State: 'Caldari',      Price: '985000',
    Description: '',
    HullStrength: '700',   Cargo: '425',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '700',  ShieldStrength: '900',
    ShieldRegen: '625',    Capacity: '600',
    EnergyRegen: '319',    CaptureRange: '36',
    Amount: '7',           Speed: '250',
    SpeedWarp: '4.5',      CPU: '200',
    Reactor: '68',         PGun: '7',
    PLauncher: '1',        CHPower: '8',
    CMPower: '3',          CLPower: '2'
  },
  Talwar: {
    Name: 'Talwar',        Type: 'Эсминец',
    State: 'Minmatar',     Price: '1060000',
    Description: '',
    HullStrength: '800',   Cargo: '400',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '800',  ShieldStrength: '850',
    ShieldRegen: '625',    Capacity: '450',
    EnergyRegen: '290',    CaptureRange: '36',
    Amount: '6',           Speed: '255',
    SpeedWarp: '4.5',      CPU: '200',
    Reactor: '51',         PGun: '0',
    PLauncher: '7',        CHPower: '7',
    CMPower: '3',          CLPower: '3'
  },
  Thrasher: {
    Name: 'Thrasher',      Type: 'Эсминец',
    State: 'Minmatar',     Price: '1200000',
    Description: '',
    HullStrength: '750',   Cargo: '400',
    DroneCompartment: '0', TControlChannel: '0',
    ArmorStrength: '750',  ShieldStrength: '800',
    ShieldRegen: '625',    Capacity: '550',
    EnergyRegen: '290',    CaptureRange: '27',
    Amount: '6',           Speed: '270',
    SpeedWarp: '4.5',      CPU: '170',
    Reactor: '70',         PGun: '7',
    PLauncher: '1',        CHPower: '8',
    CMPower: '3',          CLPower: '2'
  },
  Maller: {
    Name: 'Maller',         Type: 'Крейсер',
    State: 'Amarr',         Price: '12300000',
    Description: '',
    HullStrength: '1700',   Cargo: '480',
    DroneCompartment: '15', TControlChannel: '15',
    ArmorStrength: '2300',  ShieldStrength: '1000',
    ShieldRegen: '1250',    Capacity: '1625',
    EnergyRegen: '465',     CaptureRange: '47.5',
    Amount: '6',            Speed: '205',
    SpeedWarp: '4',         CPU: '300',
    Reactor: '1150',        PGun: '5',
    PLauncher: '0',         CHPower: '5',
    CMPower: '3',           CLPower: '6'
  },
  Augoror: {
    Name: 'Augoror',        Type: 'Крейсер',
    State: 'Amarr',         Price: '9430000',
    Description: '',
    HullStrength: '1550',   Cargo: '465',
    DroneCompartment: '20', TControlChannel: '20',
    ArmorStrength: '1650',  ShieldStrength: '1000',
    ShieldRegen: '1250',    Capacity: '2250',
    EnergyRegen: '450',     CaptureRange: '60',
    Amount: '8',            Speed: '235',
    SpeedWarp: '4',         CPU: '275',
    Reactor: '650',         PGun: '3',
    PLauncher: '0',         CHPower: '5',
    CMPower: '3',           CLPower: '5'
  },
  Omen: {
    Name: 'Omen',           Type: 'Крейсер',
    State: 'Amarr',         Price: '12100000',
    Description: '',
    HullStrength: '1500',   Cargo: '400',
    DroneCompartment: '40', TControlChannel: '40',
    ArmorStrength: '1700',  ShieldStrength: '1200',
    ShieldRegen: '1250',    Capacity: '1600',
    EnergyRegen: '565',     CaptureRange: '55',
    Amount: '6',            Speed: '260',
    SpeedWarp: '4',         CPU: '330',
    Reactor: '1000',        PGun: '5',
    PLauncher: '0',         CHPower: '5',
    CMPower: '3',           CLPower: '6'
  },
  Arbitrator: {
    Name: 'Arbitrator',      Type: 'Крейсер',
    State: 'Amarr',          Price: '9440000',
    Description: '',
    HullStrength: '1600',    Cargo: '345',
    DroneCompartment: '150', TControlChannel: '50',
    ArmorStrength: '1500',   ShieldStrength: '1100',
    ShieldRegen: '1250',     Capacity: '1375',
    EnergyRegen: '490',      CaptureRange: '70',
    Amount: '7',             Speed: '200',
    SpeedWarp: '4',          CPU: '370',
    Reactor: '695',          PGun: '2',
    PLauncher: '3',          CHPower: '4',
    CMPower: '4',            CLPower: '5'
  },
  Thorax: {
    Name: 'Thorax',         Type: 'Крейсер',
    State: 'Gallente',      Price: '11500000',
    Description: '',
    HullStrength: '1600',   Cargo: '465',
    DroneCompartment: '50', TControlChannel: '50',
    ArmorStrength: '1600',  ShieldStrength: '1200',
    ShieldRegen: '1250',    Capacity: '1450',
    EnergyRegen: '517',     CaptureRange: '52.5',
    Amount: '6',            Speed: '240',
    SpeedWarp: '4',         CPU: '330',
    Reactor: '820',         PGun: '5',
    PLauncher: '0',         CHPower: '5',
    CMPower: '4',           CLPower: '5'
  },
  Vexor: {
    Name: 'Vexor',           Type: 'Крейсер',
    State: 'Gallente',       Price: '12200000',
    Description: '',
    HullStrength: '2000',    Cargo: '480',
    DroneCompartment: '125', TControlChannel: '75',
    ArmorStrength: '2000',   ShieldStrength: '1100',
    ShieldRegen: '1250',     Capacity: '1450',
    EnergyRegen: '482',      CaptureRange: '52.5',
    Amount: '6',             Speed: '195',
    SpeedWarp: '4',          CPU: '300',
    Reactor: '700',          PGun: '4',
    PLauncher: '0',          CHPower: '4',
    CMPower: '4',            CLPower: '5'
  },
  Celestis: {
    Name: 'Celestis',       Type: 'Крейсер',
    State: 'Gallente',      Price: '9380000',
    Description: '',
    HullStrength: '1700',   Cargo: '320',
    DroneCompartment: '50', TControlChannel: '50',
    ArmorStrength: '1300',  ShieldStrength: '1200',
    ShieldRegen: '1250',    Capacity: '1300',
    EnergyRegen: '463',     CaptureRange: '75',
    Amount: '8',            Speed: '210',
    SpeedWarp: '4',         CPU: '375',
    Reactor: '575',         PGun: '3',
    PLauncher: '3',         CHPower: '3',
    CMPower: '5',           CLPower: '5'
  },
  Exequror: {
    Name: 'Exequror',       Type: 'Крейсер',
    State: 'Gallente',      Price: '10200000',
    Description: '',
    HullStrength: '1600',   Cargo: '495',
    DroneCompartment: '50', TControlChannel: '50',
    ArmorStrength: '1400',  ShieldStrength: '1000',
    ShieldRegen: '1250',    Capacity: '1925',
    EnergyRegen: '385',     CaptureRange: '55',
    Amount: '8',            Speed: '240',
    SpeedWarp: '4',         CPU: '275',
    Reactor: '610',         PGun: '3',
    PLauncher: '0',         CHPower: '3',
    CMPower: '4',           CLPower: '6'
  },
  Moa: {
    Name: 'Moa',            Type: 'Крейсер',
    State: 'Caldari',       Price: '11500000',
    Description: '',
    HullStrength: '1500',   Cargo: '450',
    DroneCompartment: '15', TControlChannel: '15',
    ArmorStrength: '1000',  ShieldStrength: '2500',
    ShieldRegen: '1250',    Capacity: '1550',
    EnergyRegen: '490',     CaptureRange: '55',
    Amount: '7',            Speed: '190',
    SpeedWarp: '4',         CPU: '380',
    Reactor: '850',         PGun: '5',
    PLauncher: '0',         CHPower: '5',
    CMPower: '5',           CLPower: '4'
  },
  Osprey: {
    Name: 'Osprey',         Type: 'Крейсер',
    State: 'Caldari',       Price: '10400000',
    Description: '',
    HullStrength: '1450',   Cargo: '485',
    DroneCompartment: '20', TControlChannel: '20',
    ArmorStrength: '1000',  ShieldStrength: '1650',
    ShieldRegen: '1250',    Capacity: '2100',
    EnergyRegen: '420',     CaptureRange: '62.5',
    Amount: '8',            Speed: '210',
    SpeedWarp: '4',         CPU: '380',
    Reactor: '470',         PGun: '1',
    PLauncher: '2',         CHPower: '5',
    CMPower: '5',           CLPower: '3'
  },
  Caracal: {
    Name: 'Caracal',        Type: 'Крейсер',
    State: 'Caldari',       Price: '12600000',
    Description: '',
    HullStrength: '1400',   Cargo: '450',
    DroneCompartment: '10', TControlChannel: '10',
    ArmorStrength: '1200',  ShieldStrength: '1700',
    ShieldRegen: '1250',    Capacity: '1250',
    EnergyRegen: '445',     CaptureRange: '57.5',
    Amount: '6',            Speed: '230',
    SpeedWarp: '4',         CPU: '430',
    Reactor: '630',         PGun: '0',
    PLauncher: '5',         CHPower: '5',
    CMPower: '5',           CLPower: '4'
  },
  Blackbird: {
    Name: 'Blackbird',      Type: 'Крейсер',
    State: 'Caldari',       Price: '9030000',
    Description: '',
    HullStrength: '1400',   Cargo: '305',
    DroneCompartment: '10', TControlChannel: '10',
    ArmorStrength: '1200',  ShieldStrength: '1400',
    ShieldRegen: '1250',    Capacity: '1250',
    EnergyRegen: '445',     CaptureRange: '85',
    Amount: '8',            Speed: '190',
    SpeedWarp: '4',         CPU: '425',
    Reactor: '525',         PGun: '3',
    PLauncher: '3',         CHPower: '4',
    CMPower: '6',           CLPower: '3'
  },
  Rupture: {
    Name: 'Rupture',        Type: 'Крейсер',
    State: 'Minmatar',      Price: '11400000',
    Description: '',
    HullStrength: '1500',   Cargo: '450',
    DroneCompartment: '30', TControlChannel: '30',
    ArmorStrength: '1800',  ShieldStrength: '1500',
    ShieldRegen: '1250',    Capacity: '1275',
    EnergyRegen: '425',     CaptureRange: '50',
    Amount: '6',            Speed: '210',
    SpeedWarp: '4',         CPU: '350',
    Reactor: '860',         PGun: '4',
    PLauncher: '1',         CHPower: '5',
    CMPower: '4',           CLPower: '5'
  },
  Scythe: {
    Name: 'Scythe',         Type: 'Крейсер',
    State: 'Minmatar',      Price: '9570000',
    Description: '',
    HullStrength: '1300',   Cargo: '475',
    DroneCompartment: '45', TControlChannel: '45',
    ArmorStrength: '1100',  ShieldStrength: '1400',
    ShieldRegen: '1250',    Capacity: '1750',
    EnergyRegen: '350',     CaptureRange: '52.5',
    Amount: '8',            Speed: '250',
    SpeedWarp: '4',         CPU: '285',
    Reactor: '345',         PGun: '2',
    PLauncher: '1',         CHPower: '3',
    CMPower: '5',           CLPower: '5'
  },
  Stabber: {
    Name: 'Stabber',        Type: 'Крейсер',
    State: 'Minmatar',      Price: '13200000',
    Description: '',
    HullStrength: '1300',   Cargo: '420',
    DroneCompartment: '25', TControlChannel: '25',
    ArmorStrength: '1300',  ShieldStrength: '1600',
    ShieldRegen: '1250',    Capacity: '1200',
    EnergyRegen: '427',     CaptureRange: '47.5',
    Amount: '5',            Speed: '290',
    SpeedWarp: '4',         CPU: '340',
    Reactor: '715',         PGun: '4',
    PLauncher: '2',         CHPower: '6',
    CMPower: '4',           CLPower: '4'
  },
  Bellicose: {
    Name: 'Bellicose',      Type: 'Крейсер',
    State: 'Minmatar',      Price: '11700000',
    Description: '',
    HullStrength: '1500',   Cargo: '315',
    DroneCompartment: '40', TControlChannel: '40',
    ArmorStrength: '1200',  ShieldStrength: '1400',
    ShieldRegen: '1250',    Capacity: '1200',
    EnergyRegen: '427',     CaptureRange: '62.5',
    Amount: '7',            Speed: '240',
    SpeedWarp: '4',         CPU: '400',
    Reactor: '650',         PGun: '0',
    PLauncher: '4',         CHPower: '4',
    CMPower: '5',           CLPower: '4'
  },
  Prophecy: {
    Name: 'Prophecy',
    Type: 'Линейный крейсер',
    State: 'Amarr',
    Price: '51800000',
    Description: '',
    HullStrength: '4000',
    Cargo: '400',
    DroneCompartment: '225',
    TControlChannel: '75',
    ArmorStrength: '5500',
    ShieldStrength: '3000',
    ShieldRegen: '1400',
    Capacity: '3000',
    EnergyRegen: '750',
    CaptureRange: '50',
    Amount: '7',
    Speed: '170',
    SpeedWarp: '3.5',
    CPU: '415',
    Reactor: '1100',
    PGun: '4',
    PLauncher: '4',
    CHPower: '5',
    CMPower: '4',
    CLPower: '7'
  },
  Harbinger: {
    Name: 'Harbinger',
    Type: 'Линейный крейсер',
    State: 'Amarr',
    Price: '52000000',
    Description: '',
    HullStrength: '4500',
    Cargo: '375',
    DroneCompartment: '75',
    TControlChannel: '50',
    ArmorStrength: '5250',
    ShieldStrength: '3000',
    ShieldRegen: '1400',
    Capacity: '3000',
    EnergyRegen: '750',
    CaptureRange: '65',
    Amount: '7',
    Speed: '175',
    SpeedWarp: '3.5',
    CPU: '375',
    Reactor: '1550',
    PGun: '6',
    PLauncher: '0',
    CHPower: '7',
    CMPower: '4',
    CLPower: '6'
  },
  Oracle: {
    Name: 'Oracle',
    Type: 'Линейный крейсер',
    State: 'Amarr',
    Price: '65500000',
    Description: '',
    HullStrength: '1980',
    Cargo: '500',
    DroneCompartment: '0',
    TControlChannel: '0',
    ArmorStrength: '2160',
    ShieldStrength: '1575',
    ShieldRegen: '1400',
    Capacity: '3500',
    EnergyRegen: '875',
    CaptureRange: '65',
    Amount: '6',
    Speed: '200',
    SpeedWarp: '3.5',
    CPU: '345',
    Reactor: '1375',
    PGun: '8',
    PLauncher: '0',
    CHPower: '8',
    CMPower: '3',
    CLPower: '6'
  },
  Brutix: {
    Name: 'Brutix',
    Type: 'Линейный крейсер',
    State: 'Gallente',
    Price: '51300000',
    Description: '',
    HullStrength: '5000',
    Cargo: '475',
    DroneCompartment: '75',
    TControlChannel: '50',
    ArmorStrength: '4500',
    ShieldStrength: '3500',
    ShieldRegen: '1400',
    Capacity: '3100',
    EnergyRegen: '774',
    CaptureRange: '60',
    Amount: '7',
    Speed: '160',
    SpeedWarp: '3.5',
    CPU: '435',
    Reactor: '1.125',
    PGun: '6',
    PLauncher: '0',
    CHPower: '7',
    CMPower: '4',
    CLPower: '6'
  },
  Myrmidon: {
    Name: 'Myrmidon',
    Type: 'Линейный крейсер',
    State: 'Gallente',
    Price: '53500000',
    Description: '',
    HullStrength: '4750',
    Cargo: '400',
    DroneCompartment: '200',
    TControlChannel: '100',
    ArmorStrength: '4500',
    ShieldStrength: '3500',
    ShieldRegen: '1400',
    Capacity: '2900',
    EnergyRegen: '725',
    CaptureRange: '55',
    Amount: '7',
    Speed: '145',
    SpeedWarp: '3.5',
    CPU: '400',
    Reactor: '1050',
    PGun: '5',
    PLauncher: '0',
    CHPower: '5',
    CMPower: '5',
    CLPower: '6'
  },
  Talos: {
    Name: 'Talos',
    Type: 'Линейный крейсер',
    State: 'Gallente',
    Price: '67100000',
    Description: '',
    HullStrength: '2180',
    Cargo: '600',
    DroneCompartment: '25',
    TControlChannel: '25',
    ArmorStrength: '1890',
    ShieldStrength: '1750',
    ShieldRegen: '1400',
    Capacity: '3100',
    EnergyRegen: '774',
    CaptureRange: '70',
    Amount: '7',
    Speed: '220',
    SpeedWarp: '3.5',
    CPU: '360',
    Reactor: '1100',
    PGun: '8',
    PLauncher: '0',
    CHPower: '8',
    CMPower: '4',
    CLPower: '5'
  },
  Ferox: {
    Name: 'Ferox',
    Type: 'Линейный крейсер',
    State: 'Caldari',
    Price: '47000000',
    Description: '',
    HullStrength: '4000',
    Cargo: '475',
    DroneCompartment: '25',
    TControlChannel: '25',
    ArmorStrength: '3500',
    ShieldStrength: '5250',
    ShieldRegen: '1400',
    Capacity: '2900',
    EnergyRegen: '725',
    CaptureRange: '75',
    Amount: '8',
    Speed: '145',
    SpeedWarp: '3.5',
    CPU: '515',
    Reactor: '1.15',
    PGun: '6',
    PLauncher: '0',
    CHPower: '7',
    CMPower: '6',
    CLPower: '4'
  },
  Drake: {
    Name: 'Drake',
    Type: 'Линейный крейсер',
    State: 'Caldari',
    Price: '52900000',
    Description: '',
    HullStrength: '3750',
    Cargo: '450',
    DroneCompartment: '25',
    TControlChannel: '25',
    ArmorStrength: '3250',
    ShieldStrength: '5500',
    ShieldRegen: '1400',
    Capacity: '2500',
    EnergyRegen: '625',
    CaptureRange: '65',
    Amount: '8',
    Speed: '150',
    SpeedWarp: '3.5',
    CPU: '500',
    Reactor: '830',
    PGun: '0',
    PLauncher: '6',
    CHPower: '7',
    CMPower: '6',
    CLPower: '4'
  },
  Naga: {
    Name: 'Naga',
    Type: 'Линейный крейсер',
    State: 'Caldari',
    Price: '62100000',
    Description: '',
    HullStrength: '1755',
    Cargo: '575',
    DroneCompartment: '0',
    TControlChannel: '0',
    ArmorStrength: '1575',
    ShieldStrength: '2160',
    ShieldRegen: '1400',
    Capacity: '2900',
    EnergyRegen: '725',
    CaptureRange: '75',
    Amount: '8',
    Speed: '195',
    SpeedWarp: '3.5',
    CPU: '425',
    Reactor: '875',
    PGun: '8',
    PLauncher: '0',
    CHPower: '8',
    CMPower: '6',
    CLPower: '3'
  },
  Cyclone: {
    Name: 'Cyclone',
    Type: 'Линейный крейсер',
    State: 'Minmatar',
    Price: '52100000',
    Description: '',
    HullStrength: '3750',
    Cargo: '450',
    DroneCompartment: '50',
    TControlChannel: '50',
    ArmorStrength: '3750',
    ShieldStrength: '5250',
    ShieldRegen: '1400',
    Capacity: '2900',
    EnergyRegen: '725',
    CaptureRange: '50',
    Amount: '6',
    Speed: '180',
    SpeedWarp: '3.5',
    CPU: '550',
    Reactor: '1100',
    PGun: '2',
    PLauncher: '5',
    CHPower: '7',
    CMPower: '5',
    CLPower: '5'
  },
  Hurricane: {
    Name: 'Hurricane',
    Type: 'Линейный крейсер',
    State: 'Minmatar',
    Price: '52400000',
    Description: '',
    HullStrength: '3500',
    Cargo: '425',
    DroneCompartment: '40',
    TControlChannel: '40',
    ArmorStrength: '4500',
    ShieldStrength: '4500',
    ShieldRegen: '1400',
    Capacity: '2300',
    EnergyRegen: '9575',
    CaptureRange: '60',
    Amount: '6',
    Speed: '180',
    SpeedWarp: '3.5',
    CPU: '400',
    Reactor: '1140',
    PGun: '6',
    PLauncher: '3',
    CHPower: '7',
    CMPower: '4',
    CLPower: '6'
  },
  Tornado: {
    Name: 'Tornado',
    Type: 'Линейный крейсер',
    State: 'Minmatar',
    Price: '71500000',
    Description: '',
    HullStrength: '1800',
    Cargo: '535',
    DroneCompartment: '0',
    TControlChannel: '0',
    ArmorStrength: '1800',
    ShieldStrength: '1890',
    ShieldRegen: '1400',
    Capacity: '2700',
    EnergyRegen: '675',
    CaptureRange: '60',
    Amount: '6',
    Speed: '225',
    SpeedWarp: '3.5',
    CPU: '342',
    Reactor: '1000',
    PGun: '8',
    PLauncher: '0',
    CHPower: '8',
    CMPower: '5',
    CLPower: '4'
  },
  Abaddon: {
    Name: 'Abaddon',        Type: 'Линкор',
    State: 'Amarr',         Price: '310000000',
    Description: '',
    HullStrength: '8800',   Cargo: '740',
    DroneCompartment: '75', TControlChannel: '75',
    ArmorStrength: '9350',  ShieldStrength: '7700',
    ShieldRegen: '2500',    Capacity: '6375',
    EnergyRegen: '1250',    CaptureRange: '96',
    Amount: '7',            Speed: '89',
    SpeedWarp: '3',         CPU: '560',
    Reactor: '21000',       PGun: '8',
    PLauncher: '1',         CHPower: '8',
    CMPower: '4',           CLPower: '7'
  },
  Apocalypse: {
    Name: 'Apocalypse',     Type: 'Линкор',
    State: 'Amarr',         Price: '307000000',
    Description: '',
    HullStrength: '7700',   Cargo: '845',
    DroneCompartment: '75', TControlChannel: '50',
    ArmorStrength: '7700',  ShieldStrength: '6600',
    ShieldRegen: '2500',    Capacity: '7000',
    EnergyRegen: '1000',    CaptureRange: '87.6',
    Amount: '7',            Speed: '113',
    SpeedWarp: '3',         CPU: '540',
    Reactor: '21000',       PGun: '8',
    PLauncher: '0',         CHPower: '8',
    CMPower: '4',           CLPower: '7'
  },
  Armageddon: {
    Name: 'Armageddon',      Type: 'Линкор',
    State: 'Amarr',          Price: '312000000',
    Description: '',
    HullStrength: '8800',    Cargo: '750',
    DroneCompartment: '375', TControlChannel: '125',
    ArmorStrength: '9350',   ShieldStrength: '7480',
    ShieldRegen: '2500',     Capacity: '6200',
    EnergyRegen: '1100',     CaptureRange: '82.5',
    Amount: '7',             Speed: '100',
    SpeedWarp: '3',          CPU: '550',
    Reactor: '13500',        PGun: '5',
    PLauncher: '5',          CHPower: '7',
    CMPower: '4',            CLPower: '7'
  },
  Hyperion: {
    Name: 'Hyperion',        Type: 'Линкор',
    State: 'Gallente',       Price: '323000000',
    Description: '',
    HullStrength: '9350',    Cargo: '845',
    DroneCompartment: '175', TControlChannel: '125',
    ArmorStrength: '8800',   ShieldStrength: '8250',
    ShieldRegen: '2500',     Capacity: '7200',
    EnergyRegen: '1500',     CaptureRange: '85.4',
    Amount: '7',             Speed: '115',
    SpeedWarp: '3',          CPU: '600',
    Reactor: '16000',        PGun: '6',
    PLauncher: '1',          CHPower: '7',
    CMPower: '5',            CLPower: '7'
  },
  Megathron: {
    Name: 'Megathron',      Type: 'Линкор',
    State: 'Gallente',      Price: '310000000',
    Description: '',
    HullStrength: '8250',   Cargo: '845',
    DroneCompartment: '75', TControlChannel: '75',
    ArmorStrength: '7.15',  ShieldStrength: '6930',
    ShieldRegen: '2500',    Capacity: '6000',
    EnergyRegen: '1150',    CaptureRange: '87',
    Amount: '7',            Speed: '122',
    SpeedWarp: '3',         CPU: '600',
    Reactor: '15500',       PGun: '7',
    PLauncher: '0',         CHPower: '7',
    CMPower: '4',           CLPower: '8'
  },
  Dominix: {
    Name: 'Dominix',         Type: 'Линкор',
    State: 'Gallente',       Price: '311000000',
    Description: '',
    HullStrength: '9350',    Cargo: '750',
    DroneCompartment: '375', TControlChannel: '125',
    ArmorStrength: '8800',   ShieldStrength: '7920',
    ShieldRegen: '2500',     Capacity: '6000',
    EnergyRegen: '1099',     CaptureRange: '84',
    Amount: '7',             Speed: '109',
    SpeedWarp: '3',          CPU: '600',
    Reactor: '10000',        PGun: '6',
    PLauncher: '0',          CHPower: '6',
    CMPower: '5',            CLPower: '7'
  },
  Rokh: {
    Name: 'Rokh',           Type: 'Линкор',
    State: 'Caldari',       Price: '312000000',
    Description: '',
    HullStrength: '8250',   Cargo: '820',
    DroneCompartment: '50', TControlChannel: '50',
    ArmorStrength: '7700',  ShieldStrength: '9350',
    ShieldRegen: '2500',    Capacity: '6000',
    EnergyRegen: '1250',    CaptureRange: '108',
    Amount: '7',            Speed: '89',
    SpeedWarp: '3',         CPU: '780',
    Reactor: '15000',       PGun: '8',
    PLauncher: '4',         CHPower: '8',
    CMPower: '6',           CLPower: '5'
  },
  Raven: {
    Name: 'Raven',          Type: 'Линкор',
    State: 'Caldari',       Price: '310000000',
    Description: '',
    HullStrength: '7040',   Cargo: '830',
    DroneCompartment: '75', TControlChannel: '50',
    ArmorStrength: '6380',  ShieldStrength: '7700',
    ShieldRegen: '2500',    Capacity: '5500',
    EnergyRegen: '1150',    CaptureRange: '90',
    Amount: '7',            Speed: '113',
    SpeedWarp: '3',         CPU: '750',
    Reactor: '11000',       PGun: '4',
    PLauncher: '6',         CHPower: '7',
    CMPower: '7',           CLPower: '5'
  },
  Scorpion: {
    Name: 'Scorpion',       Type: 'Линкор',
    State: 'Caldari',       Price: '245000000',
    Description: '',
    HullStrength: '7150',   Cargo: '690',
    DroneCompartment: '75', TControlChannel: '75',
    ArmorStrength: '6050',  ShieldStrength: '7700',
    ShieldRegen: '2500',    Capacity: '5500',
    EnergyRegen: '1099',    CaptureRange: '108',
    Amount: '7',            Speed: '94',
    SpeedWarp: '3',         CPU: '750',
    Reactor: '9500',        PGun: '4',
    PLauncher: '4',         CHPower: '5',
    CMPower: '8',           CLPower: '5'
  },
  Maelstrom: {
    Name: 'Maelstrom',       Type: 'Линкор',
    State: 'Minmatar',       Price: '297000000',
    Description: '',
    HullStrength: '7700',    Cargo: '790',
    DroneCompartment: '100', TControlChannel: '100',
    ArmorStrength: '8250',   ShieldStrength: '8800',
    ShieldRegen: '2500',     Capacity: '6000',
    EnergyRegen: '1250',     CaptureRange: '90',
    Amount: '7',             Speed: '94',
    SpeedWarp: '3',          CPU: '640',
    Reactor: '21000',        PGun: '8',
    PLauncher: '0',          CHPower: '8',
    CMPower: '6',            CLPower:'5'
  },
  Tempest: {
    Name: 'Tempest',        Type: 'Линкор',
    State: 'Minmatar',      Price: '318000000',
    Description: '',
    HullStrength: '7480',   Cargo: '780',
    DroneCompartment: '75', TControlChannel: '75',
    ArmorStrength: '7700',  ShieldStrength: '7480',
    ShieldRegen: '2500',    Capacity: '5400',
    EnergyRegen: '1150',    CaptureRange: '81',
    Amount: '7',            Speed: '127',
    SpeedWarp: '3',         CPU: '550',
    Reactor: '16000',       PGun: '6',
    PLauncher: '4',         CHPower: '8',
    CMPower: '5',           CLPower: '6'
  },
  Typhoon: {
    Name: 'Typhoon',         Type: 'Линкор',
    State: 'Minmatar',       Price: '302000000',
    Description: '',
    HullStrength: '6600',    Cargo: '780',
    DroneCompartment: '125', TControlChannel: '100',
    ArmorStrength: '6600',   ShieldStrength: '7150',
    ShieldRegen: '2500',     Capacity: '5400',
    EnergyRegen: '1099',     CaptureRange: '82.5',
    Amount: '7',             Speed: '130',
    SpeedWarp: '3',          CPU: '640',
    Reactor: '12500',        PGun: '6',
    PLauncher: '6',          CHPower: '7',
    CMPower: '5',            CLPower: '7'
  }
}



function addSelectOption(index) {
	const select = document.querySelectorAll(`select.sort`);

	if (select[index + 1].options.length === 1) {
		const entries = Object.entries(sort_array);
		for (let i = 0; i < entries.length; i++) {
			select[index + 1].append(new Option(entries[i][1], entries[i][0]));
		}
	}
}

function removeSelectOption(index) {
	const select = document.querySelectorAll(`select.sort`);

	for (let i = index + 1; i < select.length; i++) {
		select[i].selectedIndex = 0;

		for (let j = 1; j < select[i].options.length; j++) {
			select[i].remove(1);
			j--;
		}
	}
}

function disabled() {
	const select = document.querySelectorAll(`select.sort`);

	let disabled = [];
	for (let i = 0; i < select.length; i++) {
		if (select[i].value !== ``)
			disabled.push(select[i].selectedIndex);
	}

	for (let i = 0; i < select.length; i++) {
		for (let j = 1; j < select[i].options.length; j++) {
			select[i].options[j].disabled = false;
			for (let k = 0; k < disabled.length; k++) {
				if (j === disabled[k])
					select[i].options[j].disabled = true;
			}
		}
	}
}



function checked_TreeShip() {
	const checkbox = document.getElementsByClassName(`checkbox_ship`);

	let result = [];
	for (let i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			result.push(table_array[checkbox[i].value]);
		}
	}
	return result;
}

function checked_Setting() {
	const checkbox = document.getElementsByClassName(`checkbox_setting`);

	let result_Setting = [];
	for (let i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			result_Setting.push(checkbox[i].value);
		}
	}
	result_Setting.unshift(`Name`);



	const sort = document.querySelectorAll(`select.sort`);
	const sort_direct = 
	[
		document.querySelectorAll(`input[name='sort_1']`),
		document.querySelectorAll(`input[name='sort_2']`),
		document.querySelectorAll(`input[name='sort_3']`)
	]

	let result_Sort = [];
	if (sort[0].value !== ``) {
		if (sort_direct[0][0].checked) {
			result_Sort.push([ sort[0].value, `+` ]);
		}
		else {
			result_Sort.push([ sort[0].value, `-` ]);
		}

		if (sort[1].value !== '') {
			if (sort_direct[1][0].checked) {
				result_Sort.push([ sort[1].value, `+` ]);
			}
			else {
				result_Sort.push([ sort[1].value, `-` ]);
			}
			
			if (sort[2].value !== '') {
				if (sort_direct[2][0].checked) {
					result_Sort.push([ sort[2].value, `+` ]);
				}
				else {
					result_Sort.push([ sort[2].value, `-` ]);
				}
				
			}
		}
	}


	return [ result_Setting, result_Sort ];
}

function getTypeId(str) {
  switch (str) {
    case "Корвет":
      return 0;
      break;
    case "Фрегат":
      return 1;
      break;
    case "Эсминец":
      return 2;
      break;
    case "Крейсер":
      return 3;
      break;
    case "Линейный крейсер":
      return 4;
      break;
    case "Линкор":
      return 5;
      break;
    default:
      return 100;
      break;
    }
}

function sort() {
  // Получаем все поля и настройки
	let array_tree = checked_TreeShip();
	let array_sort = checked_Setting()[1];

  // Нужна ли сортировка
	if (array_sort.length > 0) {
		array_tree.sort( function(a, b) {

      // Проходим по всем уровням сортировки
			for (let i = 0; i < array_sort.length; i++) {
				let index = array_sort[i][0];

        // Если === то переход на следующий уровень
				if (a[index] !== b[index]) {
          // Если сортируются числа
					if (!!Number(a[index]) || a[index] === "0") {
						if (array_sort[i][1] === '+') {
							return +a[index] - +b[index];
						}
						else {
							return +b[index] - +a[index];
						}
					}

          // Если сортируются стороки
					else {
						if (index !== 'Type') {
							if (array_sort[i][1] === '+') {
								if (a[index].toLowerCase() < b[index].toLowerCase()) {
									return -1;
								}
								if (a[index].toLowerCase() > b[index].toLowerCase()) {
									return 1;
								}
							}
							else {
								if (a[index].toLowerCase() < b[index].toLowerCase()) {
									return 1;
								}
								if (a[index].toLowerCase() > b[index].toLowerCase()) {
									return -1;
								}
							}
						}

            // сортировка типов
						else {
							if (array_sort[i][1] === '+') {
								return +getTypeId(a[index]) - +getTypeId(b[index]);
							}
							else {
								return +getTypeId(b[index]) - +getTypeId(a[index]);
							}
						}
					}
				}
				continue;
			}
		});
	}
	return array_tree;
}

function filter(array) {
  const filt = document.getElementsByClassName("filter");
  for (let i = 0; i < filt.length; i++) {
    if (filt[i].value !== "") {
      if (filt[i].value[0] === "\\" || filt[i].value[0] === "/") {
        for (let j = 0; j < array.length; j++) {
          if (array[j][filt[i].dataset.value].toLowerCase().indexOf(filt[i].value.substring(1, filt[i].value.length).toLowerCase()) !== 0) {
            array.splice(j, 1);
            j--;
          }
        }
      }
      else {
        for (let j = 0; j < array.length; j++) {
          if (array[j][filt[i].dataset.value].toLowerCase().indexOf(filt[i].value.toLowerCase()) === -1) {
            array.splice(j, 1);
            j--;
          }
        }
      }
    }
  }
  return array;
}

function update_table() {
  if (document.querySelectorAll(`div.statis_block_setting`).length) {
    let array_tree    = filter(sort());
    let array_setting = checked_Setting()[0];

    const table_name  = document.getElementById("table_name");
    const table_value = document.getElementById("table_value");
    const display = document.querySelectorAll(`input[name='display']`);
    const filt = document.getElementsByClassName("filter");
    let html_name     = `<table border='1'>`;
    let html_value    = `<table border='1'>`;
    array_setting.forEach( function(elem_1) {
      let value_filt = "";
      for (let i = 0; i < filt.length; i++) {
        if (elem_1 === filt[i].dataset.value && filt[i].value !== "") {
          value_filt = filt[i].value;
        }
      }
      html_name += `<tr><th>${sort_array[elem_1]}</th><td><input type="text" class="filter" data-value="${elem_1}" value="${value_filt}"></td></tr>`;

      html_value += `<tr>`;
      array_tree.forEach( function(elem_2) {
        if (display[0].checked) {
          if (elem_1 === `Name`) {
            html_value += `<th>${elem_2[elem_1]}</th>`;
          }
          else {
            html_value += `<td>${elem_2[elem_1]}</td>`;
          }
        }
        else if  (display[1].checked) {
          if (elem_1 === `Name`) {
            html_value += `<th>${elem_2[elem_1]}</th>`;
          }
          else if (elem_1 === `Type` || elem_1 === `State` ||  elem_1 === `Price`) {
            html_value += `<td>${elem_2[elem_1]}</td>`;
          }
          else {
            if (elem_2["Price"] === "0") {
              html_value += `<td>free</td>`;
            }
            else if (elem_2[elem_1] === "0") {
              html_value += `<td></td>`;
            }
            else {
              html_value += `<td>${Math.round(100 * (Number(elem_2["Price"]) / Number(elem_2[elem_1]))) / 100}</td>`;
            }
          }
        }
      });
      html_value += `</tr>`;
    });
    html_name  += `<tr class='size'><th></th><td></td></tr></table>`;
    html_value += `</table>`;

    table_name.innerHTML = html_name;
    table_value.innerHTML = html_value;
  }
}



{
  input = document.querySelectorAll("input.invert_tree");
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      const checkbox = document.getElementsByClassName(`checkbox_ship`);

      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = !checkbox[i].checked;
      }
    }
  }

  input = document.querySelectorAll("input.clear_tree");
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      const checkbox = document.getElementsByClassName(`checkbox_ship`);

      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
      }
    }
  }

  input = document.querySelectorAll("input.invert_setting");
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      const checkbox = document.getElementsByClassName(`checkbox_setting`);

      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = !checkbox[i].checked;
      }
    }
  }

  input = document.querySelectorAll("input.clear_setting");
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      const checkbox = document.getElementsByClassName(`checkbox_setting`);

      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
      }
    }
  }

  if (status === "statis") {
    const select_sort = document.querySelectorAll(`select.sort`);
    for (let i = 0; i < select_sort.length; i++) {
      select_sort[i].addEventListener('change', function(element) {
        if (element.target.value === ``) {
          if (i < select_sort.length - 1)
            removeSelectOption(i);
        }
        else {
          if (i < select_sort.length - 1)
            addSelectOption(i);
        }
        disabled();
      });
    }

    let button = document.getElementsByClassName("update_table");
    for (let i = 0; i < button.length; i++) {
      button[i].onclick = function() {
        update_table();
      }
    }
  }
}
/*
{

  let input = document.querySelectorAll(`input.checkbox_ship`);
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      update_table();
    }
  }

  input = document.querySelectorAll("input.invert_tree");
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      const checkbox = document.getElementsByClassName(`checkbox_ship`);

      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = !checkbox[i].checked;
      }
      update_table();
    }
  }

  input = document.querySelectorAll("input.clear_tree");
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      const checkbox = document.getElementsByClassName(`checkbox_ship`);

      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
      }
      update_table();
    }
  }

  input = document.querySelectorAll(`input.checkbox_setting`);
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      update_table();
    }
  }

  input = document.querySelectorAll("input.invert_setting");
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      const checkbox = document.getElementsByClassName(`checkbox_setting`);

      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = !checkbox[i].checked;
      }
      update_table();
    }
  }

  input = document.querySelectorAll("input.clear_setting");
  for (let i = 0; i < input.length; i++) {
    input[i].onclick = function() {
      const checkbox = document.getElementsByClassName(`checkbox_setting`);

      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
      }
      update_table();
    }
  }

  if (status === "statis") {
    const select_sort = document.querySelectorAll(`select.sort`);
    for (let i = 0; i < select_sort.length; i++) {
      select_sort[i].addEventListener('change', function(element) {
        if (element.target.value === ``) {
          if (i < select_sort.length - 1)
            removeSelectOption(i);
        }
        else {
          if (i < select_sort.length - 1)
            addSelectOption(i);
        }
        disabled();

        update_table();
      });
    }

    // Динамическое обновление таблицы
    let input_sort = document.querySelectorAll(`input.sort_input`);
    for (let i = 0; i < input_sort.length; i++) {
      input_sort[i].onclick = function() {
        update_table();
      }
    }

    let input_display = document.querySelectorAll(`input.display_input`);
    for (let i = 0; i < input_display.length; i++) {
      input_display[i].onclick = function() {
        update_table();
      }
    }

    var button = document.getElementsByClassName("update_table");
    for (let i = 0; i < button.length; i++) {
      button[i].onclick = function() {
        update_table();
      }
    }
  }
}
*/