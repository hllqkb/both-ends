// PROTOTYPE - NOT FOR PRODUCTION
// Question: 学校和实习两头都要接住、精力还一直在烧，这种顾此失彼的取舍能不能撑起两分钟的一局？
// Date: 2026-11-10
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // The ramp: five semesters, each faster and busier than the last.
  semester_seconds: { value: 24, min: 10, max: 60, step: 1 },      // seconds a semester lasts
  fall_speed_start: { value: 170, min: 80, max: 400, step: 10 },   // px/s in the first semester
  fall_speed_gain: { value: 42, min: 0, max: 120, step: 2 },       // px/s added each semester
  spawn_gap_start: { value: 1.35, min: 0.4, max: 3, step: 0.05 },  // seconds between drops, first semester
  spawn_gap_shrink: { value: 0.2, min: 0, max: 0.5, step: 0.01 },  // seconds shaved off each semester
  spawn_gap_floor: { value: 0.45, min: 0.2, max: 2, step: 0.05 },  // the gap never goes under this

  // The player.
  run_speed: { value: 520, min: 200, max: 1000, step: 10 },        // px/s
  tired_below: { value: 25, min: 0, max: 60, step: 1 },            // energy under this slows the run
  tired_factor: { value: 0.65, min: 0.3, max: 1, step: 0.05 },     // run speed multiplier when tired
  dash_boost: { value: 2.4, min: 1, max: 5, step: 0.1 },           // run speed multiplier in a dash
  dash_time: { value: 0.2, min: 0.05, max: 0.6, step: 0.01 },      // seconds a dash lasts
  dash_cooldown: { value: 0.5, min: 0, max: 3, step: 0.05 },       // seconds before the next dash
  dash_cost: { value: 5, min: 0, max: 20, step: 1 },               // energy a dash burns
  catch_half: { value: 62, min: 20, max: 120, step: 2 },           // px either side of the player that catches
  phone_half: { value: 38, min: 10, max: 120, step: 2 },           // px either side that a phone hits (narrower: a near miss is a miss)

  // The candle: energy.
  energy_drain: { value: 2.0, min: 0, max: 6, step: 0.1 },         // energy lost per second
  pillow_gap: { value: 8, min: 3, max: 20, step: 0.5 },            // seconds between pillows
  pillow_gain: { value: 28, min: 5, max: 60, step: 1 },            // energy a pillow gives back
  phone_stun: { value: 1.2, min: 0.2, max: 3, step: 0.1 },         // seconds a caught phone freezes the player
  phone_drain: { value: 6, min: 0, max: 30, step: 1 },             // energy a caught phone burns

  // The two bars.
  catch_gain: { value: 4, min: 0, max: 20, step: 1 },              // bar points for a homework or ticket caught
  miss_loss: { value: 12, min: 2, max: 40, step: 1 },              // bar points for a homework or ticket missed
  alert_loss: { value: 22, min: 5, max: 60, step: 1 },             // internship bar points for an alert missed
  trophy_gain: { value: 8, min: 0, max: 30, step: 1 },             // both bars, for a trophy caught

  // What falls. Shares of the regular drops, once the kind has been introduced.
  phone_share: { value: 0.12, min: 0, max: 0.5, step: 0.01 },      // from the third semester
  alert_share: { value: 0.12, min: 0, max: 0.5, step: 0.01 },      // from the fourth; half again as many in the fifth
  trophy_share: { value: 0.04, min: 0, max: 0.3, step: 0.01 },     // from the third semester
  alert_speed: { value: 1.5, min: 1, max: 3, step: 0.05 },         // an alert falls this many times faster
  pillow_speed: { value: 0.7, min: 0.3, max: 1.5, step: 0.05 },    // a pillow drifts down this many times slower

  // The score.
  points_catch: { value: 10, min: 1, max: 100, step: 1 },          // homework or ticket
  points_alert: { value: 30, min: 1, max: 200, step: 1 },          // an alert handled
  points_trophy: { value: 150, min: 10, max: 1000, step: 10 },     // a trophy
  combo_step: { value: 5, min: 2, max: 20, step: 1 },              // catches in a row for each +1 on the multiplier
  mult_max: { value: 5, min: 1, max: 10, step: 1 },                // the multiplier's ceiling
};
