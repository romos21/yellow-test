const {getTest, postTest, putTest, deleteTest} = require("./request");

const test = async (request) => {
    const response = await request();
    expect(response.headers["content-type"]).toEqual("application/json");
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(300);
    expect(response.data.response.params).toBeInstanceOf(Object);
    expect(Object.keys(response.data.response.params).length).toEqual(0);
    expect(typeof response.data.response.body).toBe("string");
    expect(response.data.response.body).toBe("");
}

it('test get request', async () => {
    await test(getTest);
});

it('test post request', async () => {
    await test(postTest);
});

it('test delete request', async () => {
    await test(deleteTest);
});

it('test put request', async () => {
    await test(putTest);
});