const { getNameHistory } = require("..")

test("checks Tekoh username", async () => {
    const data = await getNameHistory("Tekoh")

    expect(data.username).toBe("Tekoh")
})

test("checks Tekoh UUID", async () => {
    const data = await getNameHistory("Tekoh")

    expect(data.uuid).toBe("260c091e457b41dca46d44157e82b5dc")
})

test("checks Tekoh name history", async () => {
    const data = await getNameHistory("Tekoh")

    expect(data.history.length).toBe(12)
})

test("checks pages", async () => {
    const data = await getNameHistory("Tekoh")

    expect(data.toPages().size).toBe(2)
})

test("checks invalid username", async () => {
    const data = await getNameHistory("amdopiandouajdouahouhiou")

    expect(data).toBe(undefined)
})

test("checks invalid username #2", async () => {
    const data = await getNameHistory("$&%*!&")

    expect(data).toBe(undefined)
})