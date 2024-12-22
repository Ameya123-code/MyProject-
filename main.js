const audioContext = new (window.AudioContext || window.webkitAudioContext)();

let oscillator1 = null;

let oscillator2 = null;

let gainNode = null;

const frequencyInput = document.getElementById('frequency');

const volumeSlider = document.getElementById('volume');

const waveformSelector = document.getElementById('waveform');

const startStopButton = document.getElementById('start-stop');

const playBeatsButton = document.getElementById('play-beats');

const beatFrequencyInput = document.getElementById('beat-frequency');

const presetButtons = document.querySelectorAll('.preset-buttons button');

const darkModeToggle = document.querySelector('.dark-mode-toggle');

const volValue = document.getElementById('vol-value');

const canvas = document.getElementById('oscilloscope');

const canvasCtx = canvas.getContext('2d');