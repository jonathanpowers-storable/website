import { Effect } from "effect"
import { resource } from "./resource"

// $ExpectType Effect<Scope, Error, void>
const program = Effect.gen(function* (_) {
  const res = yield* _(resource)
  console.log(`content is ${res.contents}`)
})