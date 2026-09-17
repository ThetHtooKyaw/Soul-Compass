class DescriptionModel {
  constructor(data) {
    Object.assign(this, data);
  }
}

export const zodiacDescriptionList = {
  Aries: new DescriptionModel({
    sunSign:
      "The cosmos forged your spirit in a crucible of pure fire, anchoring your ego in bold initiation and unyielding courage. You are the spark that breaks the dark, moving through the world with an urgent, pioneering pulse that refuses to wait. Your presence commands rooms without asking permission, driven by a raw authenticity that cannot be faked.",
    strengths:
      "Your greatest power lies in your fearless initiative and your ability to breathe life into dormant dreams. When others hesitate at the edge of the cliff, you leap, clearing paths for the rest of the world to follow. Your resilience is legendary; no matter how heavy the fall, your flame always finds a way to rise again.",
    weaknesses:
      "That same rushing fire can sometimes scorch the earth before the seeds have time to grow. Patience is a distant star to you, and frustration often whispers sharp words in the heat of the moment. You carry a tendency to start a thousand fires, leaving the final embers unattended for others to sweep away.",
    compatibility:
      "You find natural harmony with the air signs (Gemini, Libra, Aquarius), who fan your flames into roaring ideas, and fellow fire signs who match your relentless pulse.",
  }),
  TAURUS: new DescriptionModel({
    sunSign:
      "Your essence is rooted deep within the bedrock of the earth, steady, enduring, and quietly holding the weight of the world on broad shoulders. Your ego is anchored in quiet strength, finding your truest reflection not in loud words, but in tangible creations and lasting peace. You move at the rhythm of the seasons—slow, deliberate, and impossible to move once your roots take hold.",
    strengths:
      "You possess an unshakeable inner anchor that keeps you completely steady while the rest of the world spins out of control. Your loyalty is a fortress; once you welcome someone inside your walls, you defend them with quiet, unbreakable devotion. You also carry a rare gift for turning raw, messy chaos into comfortable, beautiful reality.",
    weaknesses:
      "That legendary endurance can harden into a stubborn stone wall that refuses to bend, even when bending is the only way to survive a storm. You hold onto grievances, old hurts, and outdated comforts long after their expiration date has passed. Change feels like an earthquake to your spirit, making you prone to freezing in place out of sheer resistance.",
    compatibility:
      "You find deep, grounding peace with earth signs (Virgo, Capricorn) who speak your quiet language, and water signs (Cancer, Scorpio, Pisces) who water your soil so you can bloom.",
  }),
  Gemini: new DescriptionModel({
    sunSign:
      "Your mind is a constellation of humming thoughts, forever dancing between worlds like a messenger riding the shifting wind. Your ego is built on curiosity, shifting reflections, and an insatiable hunger to understand every secret whispered behind the cosmic veil. You are never just in one place; your spirit lives simultaneously in the past, the future, and a dozen alternate questions.",
    strengths:
      "Your intellect is a razor-sharp blade that can cut through complex confusion in a single breath and weave silver bridges between total strangers. You adapt to changing tides effortlessly, turning unexpected plot twists into exciting new chapters before anyone else has even noticed the shift. Your wit is light, sparkling, and capable of waking up even the sleepiest room.",
    weaknesses:
      "Because your attention is pulled toward a thousand shining stars at once, your roots can sometimes struggle to dig deep into the earth. Restlessness shadows your steps, leaving unfinished projects scattered behind you like breadcrumbs in the forest. When the noise inside your head grows too loud, scattering your energy, you may wander in circles searching for an anchor that isn't there.",
    compatibility:
      "You dance best with fellow air signs (Libra, Aquarius) who can keep up with your mental gymnastics, and fire signs (Aries, Leo, Sagittarius) who turn your endless thoughts into brilliant action.",
  }),
  Cancer: new DescriptionModel({
    sunSign:
      "You carry a vast, hidden ocean inside your chest, guarded by a tough shell built from ancient wisdom and protective intuition. Your ego is deeply intertwined with the emotional safety of your sacred spaces and the bonds you forge with your chosen souls. You feel the invisible currents shifting in any room long before anyone else speaks a single word.",
    strengths:
      "Your empathy is a profound healing well that offers absolute sanctuary to those wandering lost in the dark. You possess an intuitive radar that senses danger and deception long before it knocks on your door. Your capacity to nurture, protect, and build safe havens makes you the enduring heart of any circle you belong to.",
    weaknesses:
      "Because you feel every ripple in the emotional atmosphere so intensely, your shell can snap shut at the slightest hint of a cold wind. You carry the heavy habit of retreating into your deep waters, nursing old wounds in secret while the world outside wonders what went wrong. It is difficult for you to let go of yesterday, often letting past ghosts haunt your present peace.",
    compatibility:
      "You find your safest harbors with water signs (Scorpio, Pisces) who swim in your same deep waters, and earth signs (Taurus, Virgo, Capricorn) who build solid shores to steady your crashing tides.",
  }),
  Leo: new DescriptionModel({
    sunSign:
      "Your spirit burns with the direct majesty of the sun, radiating warmth, creative radiance, and an unmistakable royal presence. Your ego is the golden core of your expression, demanding that you live out loud rather than hiding your light behind grey clouds. You are here to remind the world that life is meant to be celebrated as a grand, theatrical masterpiece.",
    strengths:
      "Your generosity knows no bounds; you love with a wide-open heart that seeks to uplift, champion, and crown everyone standing beside you. You possess an innate courage that steps straight into the spotlight when crisis strikes, becoming a fearless protector for those who feel small. Your creativity is a blazing forge that can turn ordinary moments into unforgettable magic.",
    weaknesses:
      "When the sun behind your clouds feels dimmed or ignored, your radiant warmth can quickly morph into a sharp, wounded pride. You crave validation like oxygen, and the silent treatment from the world can feel like a bitter winter to your spirit. Sometimes, your grand vision forgets the quiet, subtle details that keep the foundation from cracking.",
    compatibility:
      "You share a magnificent stage with fellow fire signs (Aries, Sagittarius) who match your blazing energy, and air signs (Gemini, Libra) who blow on your embers to make you burn even brighter.",
  }),
  Virgo: new DescriptionModel({
    sunSign:
      "Your soul acts as the master architect of the cosmos, seeing the grand design hidden inside the smallest, overlooked grain of sand. Your ego finds its quiet pride in mastery, refinement, and the sacred act of making broken things whole again. You read the world like a complex map, constantly adjusting the details so everything functions in perfect harmony.",
    strengths:
      "Your mind is a marvel of precision, capable of untangling the most tangled knots of chaos with calm, methodical grace. Your devotion to helping others is not loud or performant; it is expressed through quiet, practical acts of service that quietly save the day when others fail. You hold a standard of excellence that elevates everything you touch.",
    weaknesses:
      "The endless desire for perfection can become a heavy iron cage, trapping you in cycles of relentless self-criticism and quiet anxiety. You notice every single flaw in the tapestry, sometimes missing the breathtaking beauty of the whole picture because one single thread is out of place. It can be hard for you to turn off your analytical engine and simply rest in the messiness of being human.",
    compatibility:
      "You build steady, reliable worlds alongside earth signs (Taurus, Capricorn) and find mental clarity paired with water signs (Cancer, Scorpio) who soften your sharp edges with emotional depth.",
  }),
  Libra: new DescriptionModel({
    sunSign:
      "Your essence is woven from silver threads of balance, beauty, and an eternal quest to bridge divided worlds. Your ego reflects in the mirror of human connection; you understand yourself most clearly through the partnerships and harmonies you cultivate. You carry an innate radar for injustice, constantly weighing scales to bring peace where chaos tries to rule.",
    strengths:
      "Your diplomacy can disarm the fiercest storms, turning bitter enemies into collaborative allies with a few well-chosen, graceful words. You possess a rare, refined eye for art, elegance, and design that brings immediate harmony to any space you enter. You see every side of a story with remarkable fairness, ensuring everyone feels heard and valued.",
    weaknesses:
      "In your desperate bid to keep the peace and avoid ugly friction, you often swallow your own truth until you lose your voice altogether. Making decisions can become a dizzying trap as you weigh every possible outcome on your endless mental scales. You may lean too heavily on the opinions of others, forgetting that your own foundation needs to stand on its own.",
    compatibility:
      "You dance effortlessly with air signs (Gemini, Aquarius) who share your love for conversation, and fire signs (Aries, Leo) who provide the decisive spark you sometimes hesitate to ignite.",
  }),
  Scorpio: new DescriptionModel({
    sunSign:
      "Your spirit dwells in the mysterious depths where light meets shadow, holding the keys to transformation, rebirth, and absolute truth. Your ego is forged in quiet intensity, refusing surface-level illusions and demanding to see the raw, unfiltered soul of everything. You are the alchemist of the zodiac, capable of rising completely renewed from your own ashes.",
    strengths:
      "Your focus is an unyielding laser beam; once you set your sights on a mystery or a goal, nothing in this world can distract you. Your loyalty runs deeper than the deepest ocean—you will guard your people's secrets and fight their battles to the absolute end. Your intuition borders on the supernatural, reading intentions before a single word is spoken.",
    weaknesses:
      "Because you guard your vulnerable heart behind impenetrable stone walls, suspicion and guardedness can poison your sweetest connections. You struggle to let go of old betrayals, sometimes carrying grudges like heavy stones in your pockets long after the offender has moved on. The desire to control your environment can turn into a dark storm when things feel uncertain.",
    compatibility:
      "You bond on a soul-deep level with fellow water signs (Cancer, Pisces) who understand your silent depths, and earth signs (Taurus, Virgo) who provide a safe, unbreakable anchor for your storms.",
  }),
  Sagittarius: new DescriptionModel({
    sunSign:
      "Your soul is a wild archer whose arrow is forever notched toward distant horizons and infinite possibilities. Your ego thrives on expansion, freedom, and the endless pursuit of higher truth across foreign lands and philosophies. You cannot be caged; you need wide-open spaces and a clear view of the stars to feel truly alive.",
    strengths:
      "Your optimism is an unquenchable torch that can guide entire crowds out of the deepest valleys of despair. You possess an adventurous, philosophical spirit that turns every mistake and detour into a fascinating lesson rather than a tragedy. Your honesty is refreshingly direct, cutting through pretense with a liberating laugh that clears the air instantly.",
    weaknesses:
      "Your absolute need for freedom can make you slip away like smoke the moment things get too heavy, heavy with commitment or routine. Tact is sometimes sacrificed on the altar of your brutal honesty, leaving wounded feelings in your wake before you even realize what you said. You can scatter your grand visions across too many horizons, missing the magic waiting right in front of you.",
    compatibility:
      "You run wild and free with fellow fire signs (Aries, Leo) who share your high-voltage enthusiasm, and air signs (Gemini, Libra, Aquarius) who join you on your endless intellectual quests.",
  }),
  Capricorn: new DescriptionModel({
    sunSign:
      "Your spirit is carved from ancient mountain stone, built for the long, steep climb to the highest peaks of mastery. Your ego is anchored in discipline, legacy, and the quiet satisfaction of a structure built to withstand the test of time. You understand that true power is quiet, patient, and earned through weathering every winter the world sends your way.",
    strengths:
      "Your reliability is a monument; when you give your word, it is carved in stone and honored no matter how hard the road becomes. You possess a master strategist's mind, capable of turning distant, impossible dreams into step-by-step realities through sheer grit. Your resilience grows stronger under pressure, turning heavy burdens into stepping stones.",
    weaknesses:
      "The relentless drive to reach the summit can turn you into a solitary traveler, carrying all the weight on your own shoulders while refusing help. You can be overly rigid, judging yourself and others by impossibly harsh metrics of productivity and success. Joy and play can feel like a waste of time to you, trapping you inside a fortress of endless duties.",
    compatibility:
      "You find steady, ambitious partnership with fellow earth signs (Taurus, Virgo) who understand your work ethic, and water signs (Scorpio, Pisces) who remind you how to soften your stone.",
  }),
  Aquarius: new DescriptionModel({
    sunSign:
      "Your mind belongs to tomorrow, tuning into frequencies and futuristic ideas that the rest of the world is only just beginning to imagine. Your ego is anchored in collective evolution, freedom of thought, and marching proudly to the beat of an eccentric, unheard drum. You are the cosmic rebel, here to break stagnant molds and show humanity what it could become.",
    strengths:
      "Your intellect is brilliantly innovative, capable of solving systemic puzzles that leave traditional thinkers completely baffled. You champion equality and human connection with a fierce, unbiased passion that embraces every outcast and visionary. Your perspective is wonderfully objective, allowing you to see the big picture without getting bogged down in petty drama.",
    weaknesses:
      "In your obsession with grand, abstract ideas for humanity, you can sometimes feel strangely detached from the individual human heart right in front of you. Vulnerability feels like an awkward foreign language, causing you to retreat into your intellectual fortress when emotions get too messy. Your stubborn rebellion can make you push against rules simply because they exist.",
    compatibility:
      "You sync your frequencies effortlessly with fellow air signs (Gemini, Libra) and fire signs (Aries, Sagittarius) who cheer on your wildest, most unorthodox experiments.",
  }),
  Pisces: new DescriptionModel({
    sunSign:
      "Your spirit swims in the mystical borderlands where dreams, art, and universal consciousness bleed seamlessly into one another. Your ego is porous, absorbing the joys, sorrows, and hidden magic of the entire cosmos like a sponge. You are the final dreamer of the zodiac wheel, holding a drop of every other sign's ocean inside your heart.",
    strengths:
      "Your imagination is a limitless universe capable of birthing breathtaking art, profound poetry, and unmatched healing compassion. You possess a gentle, forgiving empathy that makes every wounded soul feel safe in your presence. Your intuition is practically psychic, often knowing the outcome of a story long before the first page is even written.",
    weaknesses:
      "Because your boundaries are made of mist rather than stone, you easily absorb heavy energies that do not belong to you, leading to emotional exhaustion. Reality can feel too harsh and sharp for your tender spirit, tempting you to drift away into escapism when the tides turn rough. Saying 'no' feels like a betrayal of your kind nature, often leaving you over-giving until your own well runs dry.",
    compatibility:
      "You find a silent, beautiful understanding with fellow water signs (Cancer, Scorpio) who protect your fragile sanctuary, and earth signs (Taurus, Capricorn) who gently tether your floating spirit to the ground.",
  }),
};
