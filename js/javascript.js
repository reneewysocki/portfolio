function useTypeIt() {
    if(typeof TypeIt != 'undefined') {
        new TypeIt('.title', {
            speed: 200,
            startDelay: 800,
            strings: ['WEB DEVELOPER', 'GRAPHIC DESIGNER'],
            breakLines: false,
            loop: true
        });
    } else {
        return false;
    }
}