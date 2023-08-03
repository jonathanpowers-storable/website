import { Effect, Random } from "effect"

// $ExpectType Effect<never, string, number>
const task = Effect.filterOrFail(
  Random.nextRange(-1, 1),
  (n) => n >= 0,
  () => "random number is negative"
)

// $ExpectType Effect<never, string, number>
const tapping1 = Effect.tapError(task, (error) =>
  Effect.log(`failure: ${error}`)
)

// $ExpectType Effect<never, string, number>
const tapping2 = Effect.tapBoth(task, {
  onFailure: (error) => Effect.log(`failure: ${error}`),
  onSuccess: (randomNumber) => Effect.log(`random number: ${randomNumber}`)
})
