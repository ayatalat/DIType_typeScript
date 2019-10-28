

interface MidService {
    serve: () => void;
}

// class service provider 

class ServiceProvider implements MidService {
    serve() {
        console.log('Service by service provider');
    }
}

// client
class ServiceConsumer {
    service : MidService;

    start(s: MidService) {
        console.log('Calling service');
        this.service = s;
        this.service.serve();
    }
}

function main () {
    const client = new ServiceConsumer();

    client.start(new ServiceProvider());
}


main();