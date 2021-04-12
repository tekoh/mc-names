const { getUUID } = require("..")

test("checks Tekoh UUID", async () => {
    const data = await getUUID("Tekoh")

    expect(data).toBe("260c091e457b41dca46d44157e82b5dc")
})
