
interface IRepository {
    GetData: () => void
}


class ServiceAProperty {
    Repository: IRepository;

    GetResult() {
        return this.Repository.GetData();
    }
}


class MongoDbRepository implements IRepository {
    GetData() {
        return "Mongo";
    }
}

class SqlServerDbRepository implements IRepository {
    GetData() {
        return "SQL";
    }
}

class TestRepository implements IRepository {
    GetData() {
        return "Fake object";
    }
}


class main {
    repoOne: IRepository;
    serviceAProperty: any
    constructor(type: string) {
        this.serviceAProperty = new ServiceAProperty();
        if (type === 'sql') {
            this.repoOne = new SqlServerDbRepository();
        }
        else {
            this.repoOne = new TestRepository();
        }

        this.serviceAProperty.Repository = this.repoOne;
        console.log('Result:',  this.serviceAProperty.GetResult());
    }
}


const obj = new main('');