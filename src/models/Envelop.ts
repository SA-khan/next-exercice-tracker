class Envelop {
    constructor(
        public isSuccessful?: boolean,
        public responseMessage?: number,
        public content?: any
    ) { }
}

export default Envelop;