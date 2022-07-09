import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateLinkMenu = z.object({
  name: z.string(),
})

export default resolver.pipe(resolver.zod(CreateLinkMenu), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const linkMenu = await db.linkMenu.create({ data: input })

  return linkMenu
})