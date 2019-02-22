function useTypeIt() {
    if(typeof TypeIt != 'undefined') {
        new TypeIt('.title', {
            speed: 200,
            startDelay: 800,
            strings: ['Web Developer', 'Graphic Designer'],
            breakLines: false,
            loop: true
        });
    } else {
        return false;
    }
}