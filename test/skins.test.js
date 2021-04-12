const { getSkin, getUUID } = require("..")

test("checks Tekoh OF cape", async () => {
    const data = await getSkin("Tekoh")

    expect(data.optifineCape).toBe("http://s.optifine.net/capes/Tekoh.png")
})

test("checks Tekoh Minecon cape", async () => {
    const data = await getSkin("Tekoh")

    expect(data.mineconCape).toBe(undefined)
})

test("checks Float Minecon cape", async () => {
    const data = await getSkin("Float")

    const uuid = await getUUID("Float")

    expect(data.mineconCape).toBe(`https://crafatar.com/capes/${uuid}`)
})