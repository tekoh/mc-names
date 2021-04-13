const { getUUID } = require("..")

test("checks Tekoh UUID", async () => {
    const data = await getUUID("Tekoh")

    expect(data).toBe("260c091e457b41dca46d44157e82b5dc")
})

test("checks invalid username", async () => {
    const data = await getUUID("amdopiandouajdouahouhiou")

    expect(data).toBe(undefined)
})

test("checks invalid username #2", async () => {
    const data = await getUUID("$&%*!&")

    expect(data).toBe(undefined)
})
