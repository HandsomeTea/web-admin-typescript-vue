import HTTP from './http';

class API {
    private errorHandle(error: httpException): Promise<apiResult> {
        return Promise.resolve({ error });
    }

    private successHandle(data: unknown): Promise<apiResult> {
        return Promise.resolve({ data });
    }

    public async test(body?: Record<string, unknown>): Promise<apiResult> {
        return HTTP.get('/tests/test/api', { data: body })
            .then(async r => await this.successHandle(r))
            .catch(async e => await this.errorHandle(e));
    }
}

export default new API();
