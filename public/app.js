document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const textInput = document.getElementById('text-input');
    const voiceSelect = document.getElementById('voice-select');

    generateBtn.addEventListener('click', () => {
        const text = textInput.value;
        const voice = voiceSelect.value;

        if (text.trim() === '') {
            alert('براہ کرم متن درج کریں۔');
            return;
        }

        alert(`Generating voice for: "${text}" using voice: ${voice}`);
        // Here you would integrate with your TTS API
    });
});
