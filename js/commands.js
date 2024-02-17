let github = 'https://github.com/RageGen';
let email = 'mailto:ragegen@inbox.ru';
let telegram = 'https://t.me/ragegen';
let telegramch = 'https://t.me/chownragegen';
let existCommands = [
  'about',
  'banner',
  'clear',
  'date',
  'email',
  'github',
  'help',
  'history',
  'social',
  'skills',
  'theme',
  'theme ls',
  'theme set',
  'theme set dark',
  'theme set mdrage',
  'theme set random',
];

about = [
  "Hello, I'm ragegen(Daniil)",
  'DevOps from Russia',
  'And I am a novice programmer enthusiast.',
  'To know more about me see my <span class="command">social</span>',
];
skills = [
  "Programming languages:",
  "C++, C#, Python, JS", 
  "The main systems in use:",
  "Win 11, Arch Linux",
  "Additional skills:",
  "git, computer hardware skills",
]
social = [
  'telegram|profile<a href="' + 
  telegram +
  '"target="_blank"> message to me</a>',
  'telegram|channel<a href="'+
  telegramch +
  '"target="_blank"> subscribe</a>',  
  'github<a href="' +
  github +
  '" target="_blank"> github/ragegen</a>',
];

themes = ['dark','mdrage'];

theme = [
  'Usage: theme [arg]',
  'Args:',
  '  - ls: list all available themes',
  '  - set: set a theme',
  '  - set random: set a random theme',
  '<br>',
  'Example:',
  '  theme ls # to list all available themes',
  '  theme set mdrage # to set a theme',
];

help = [
  '<span class="command">about</span>              Who is ragegen?',
  '<span class="command">banner</span>             Display the header',
  '<span class="command">clear</span>              Clear the teminal',
  '<span class="command">date</span>               Display the actual date',
  '<span class="command">email</span>              Send me an email',
  '<span class="command">help</span>               Check available commands',
  '<span class="command">history</span>            View command history',
  '<span class="command">social</span>             Display social networks',
  '<span class="command">skills</span>             Displays a list of my skills',
  '<span class="command">theme</span>              Theme configurations',
  '<br>',
  '|TAB|              Trigger completion',
  '|Ctrl+l|           Clear terminal',
  '|Ctrl+p|           Go back to previous command',
];

banner = [
  '<span class="index">developed by</span>',
  '                                       ',
  '  :::::::::      :::      ::::::::  :::::::::: ::::::::  :::::::::: ::::    :::', 
  '  :+:    :+:   :+: :+:   :+:    :+: :+:       :+:    :+: :+:        :+:+:   :+:',
  '  +:+    +:+  +:+   +:+  +:+        +:+       +:+        +:+        :+:+:+  +:+', 
  '  +#++:++#:  +#++:++#++: :#:        +#++:++#  :#:        +#++:++#   +#+ +:+ +#+', 
  '  +#+    +#+ +#+     +#+ +#+   +#+# +#+       +#+   +#+# +#+        +#+  +#+#+#',
  '  #+#    #+# #+#     #+# #+#    #+# #+#       #+#    #+# #+#        #+#   #+#+#', 
  '  ###    ### ###     ###  ########  ########## ########  ########## ###    ####', 
  '                                                                               ',
  '<span class="color2">Web terminal-portfolio</span>',
  '<span class="color2">For commands list type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
];


banner_min = [
  '<span class="index">developed by</span>',
  '                                       ',
  '.#####...####...####..######..####..######.##..##.',
  '.##..##.##..##.##.....##.....##.....##.....###.##.',
  '.#####..######.##.###.####...##.###.####...##.###.',
  '.##..##.##..##.##..##.##.....##..##.##.....##..##.',
  '.##..##.##..##..####..######..####..######.##..##.',
  '                                                  ',
  '<span class="color2">Web terminal-portfolio</span>',
  '<span class="color2">For commands list type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
];
