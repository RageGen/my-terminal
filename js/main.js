let before = document.getElementById('before');
let liner = document.getElementById('liner');
let command = document.getElementById('typer');
let textarea = document.getElementById('texter');
let terminal = document.getElementById('terminal');
let lastTab;

let commands = [];
let git = 0;

loadTheme();

setTimeout(function () {
  loadBanner();
  textarea.focus();
}, 100);

textarea.addEventListener('blur', function () {
  setTimeout(function () {
    textarea.focus();
  }, 20);
});

window.addEventListener('keyup', enterKey);
window.addEventListener('keydown', keyDown);

textarea.value = '';
command.innerHTML = textarea.value;

function keyDown(e) {
  if (e.ctrlKey && e.key == 'l') {
    e.preventDefault();
    cls();
  }
  if (e.ctrlKey && e.key == 'p') {
    e.preventDefault();
    previousCMD();
  }
  if (e.ctrlKey && e.key == 'u') {
    e.preventDefault();
    deleteCMD();
  }
  if (e.key === 'Tab') {
    e.preventDefault();
    let now = new Date().getTime();
    let timesince = now - lastTab;
    if (timesince < 600 && timesince > 0) {
      showComplete(command.innerHTML.toLowerCase());
    } else {
      autoComplete();
    }
    lastTab = new Date().getTime();
  }
}

function enterKey(e) {
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine(
      'you@ragegen:~$ <span class="command">' +
        command.innerHTML +
        '</span>',
      'liner no-animation',
      0
    );
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = '';
    textarea.value = '';
  }
  if (e.keyCode == 38 && git != 0) {
    previousCMD();
  }
  if (e.keyCode == 40 && git != commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = '';
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}

function commander(cmd) {
  switch (cmd) {
    case 'about':
      loopLines(about, 'color margin', 80);
      break;
    case 'banner':
      loadBanner();
      break;
    case 'clear':
      clear();
      break;
    case 'date':
      getDate();
      break;
    case 'email':
      addLine(
        'Opening mailto:<a href="mailto:ragegen@inbox.ru">ragegen@inbox.ru</a>...',
        'color2',
        80
      );
      newTab(email);
      break;
    case 'help':
      loopLines(help, 'color margin', 80);
      break;
    case 'history':
      addLine('<br>', '', 0);
      loopLines(commands, 'color2', 80);
      addLine('<br>', 'command', 80 * commands.length + 50);
      break;
    case 'social':
      loopLines(social, 'color margin', 80);
      break;
    case 'skills':
      loopLines(skills, 'color margin', 80);
      break;
    case 'github':
      addLine('Opening GitHub...', 'color2', 0);
      newTab(github);
      break;
    case 'theme':
      loopLines(theme, 'color margin', 80);
      break;
    case 'theme ls':
      loopLines(themes, 'color margin', 80);
      break;
    case cmd.startsWith('theme set ') ? cmd : '':
      switchTheme(cmd);
      break;
    default:
      addLine(
        '<span>Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
        'error',
        100
      );
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, '_blank');
  }, 500);
}
function clear() {
  setTimeout(function () {
    terminal.innerHTML = '<a id="before"></a>';
    before = document.getElementById('before');
  }, 1);
}
function addLine(text, style, time) {
  let t = '';
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == ' ' && text.charAt(i + 1) == ' ') {
      t += '&nbsp;&nbsp;';
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    let next = document.createElement('p');
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, timeout) {
  name = [...name, '<br>'];
  name.forEach((item, index) => {
    addLine(item, style, index * timeout);
  });
}

function loadBanner() {
  console.log(window.screen.width);

  let logo_banner = window.screen.width > 613 ? banner : banner_min;
  loopLines(logo_banner, '', 80);
}


function previousCMD() {
  if (git != 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
}

function deleteCMD() {
  command.value = '';
  textarea.value = '';
}

function getDate() {
  loopLines([new Date().toString()], 'color margin', 80);
}

function showComplete(cmd) {
  let array = existCommands.filter((item) => item.startsWith(cmd));
  if (cmd === 'theme') {
  } else if (cmd.length > 1 && 'theme '.includes(cmd)) {
    array = ['theme ls', 'theme set [theme_name]', 'theme set random'];
  } else if (cmd.length > 6 && 'theme set'.includes(cmd)) {
    array = themes;
  }
  if (array.length > 1) {
    addLine(
      'you@ragegen:~$ <span class="command">' +
        command.innerHTML +
        '</span>',
      'liner no-animation',
      0
    );
    
    let concatenatedString = array.join(', ');
    if (concatenatedString.length > 80) {
      let lines = [];
      while (concatenatedString.length > 80) {
        let index = concatenatedString.lastIndexOf(',', 80);
        lines.push(concatenatedString.slice(0, index));
        concatenatedString = concatenatedString.slice(index + 1);
      }
      lines.push(concatenatedString);
      loopLines(lines, 'color margin', 80);
    } else {
      loopLines([concatenatedString], 'color margin', 80);
    }
  }
}

function autoComplete() {
  let arr = existCommands.filter((item) =>
    item.startsWith(command.innerHTML.toLowerCase())
  );
  if (arr.length === 1) {
    textarea.value = arr[0];
    command.innerHTML = arr[0];
  }
}

function switchTheme(cmd) {
  let themeTxt = cmd.slice(10);
  if (themeTxt === 'random') {
    themeTxt = randomTheme();
  }
  if (themes.includes(themeTxt)) {
    setTheme(themeTxt);
    return;
  }
  loopLines(
    [
      `Theme '${themeTxt}' not found. Try 'theme ls' to see the list of available themes.`,
    ],
    'color margin',
    80
  );
}

function randomTheme() {
  var randomNumber = Math.floor(Math.random() * themes.length);
  return themes[randomNumber];
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}

function loadTheme() {
  const currentTheme = localStorage.getItem('theme');
  document.body.dataset.theme = currentTheme;
}


