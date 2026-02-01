// src/data/positionInterpretations.ts

export type Position = typeof CardLabel.past | typeof CardLabel.present | typeof CardLabel.future;
export type Category = 'love' | 'career' | 'life' | 'ex';
export const CardLabel = {
  past: 'past',
  present: 'present',
  future: 'future',
}

export interface PositionReading {
  upright: string;
  reversed: string;
}

export interface PositionData {
  love: PositionReading;
  career: PositionReading;
  life: PositionReading;
  ex?: PositionReading;
}

export interface CardPositionInterpretations {
  id: number;
  name: string;
  arcana: 'Major' | 'Minor';
  vibe: string;
  description: string;
  url: string;
  past: PositionData;
  present: PositionData;
  future: PositionData;
}

export const positionInterpretations: CardPositionInterpretations[] = [
  // Major Arcana (0-21)
  {
    id: 0,
    name: 'The Fool',
    arcana: 'Major',
    vibe: 'The Golden Seed of Potential',
    description: 'A leap into the unknown; the moment before the first step where everything is possible.',
    url: '/assets/img/cards/fool.jpg',
    past: {
      love: {
        upright: 'You took a leap of faith in love. A past relationship began with excitement, spontaneity, and a willingness to risk your heart.',
        reversed: 'You rushed into love without thinking. Past naivety or recklessness in romance left scars you\'re still healing from.',
      },
      career: {
        upright: 'You took a bold career risk that shaped who you are today. That "beginner\'s mind" opened doors others couldn\'t see.',
        reversed: 'A time of professional chaos where you wandered without direction. You were free but scattered, lacking foundation.',
      },
      life: {
        upright: 'You embraced a fresh start with courage. A past leap of faith—moving, traveling, or starting over—defined your spirit.',
        reversed: 'Fear of taking risks held you back, or impulsiveness led to hard lessons. You learned that freedom without wisdom is chaos.',
      },
      ex: {
        upright: 'You walked into that relationship with a pure, wide-eyed heart. You didn\'t calculate the risks because the adventure of loving them felt worth it. That innocence wasn\'t weakness—it was brave.',
        reversed: 'Let\'s be honest: you ignored every red flag because you were addicted to the newness of them. You jumped without looking and now you\'re dealing with the fall. The lesson? Your heart isn\'t a toy to gamble with.',
      },
    },
    present: {
      love: {
        upright: 'A fresh, exciting romantic energy surrounds you. Be open to unexpected connections and new beginnings in love.',
        reversed: 'You\'re acting carelessly in romance or avoiding commitment out of fear. Stop running from what could be real.',
      },
      career: {
        upright: 'You\'re at the start of a new professional chapter. Embrace the unknown and trust your instincts to guide you forward.',
        reversed: 'You\'re resisting necessary change because you want guarantees. Growth requires risk—stop waiting for permission.',
      },
      life: {
        upright: 'The universe is inviting you to start fresh. It\'s okay to not have all the answers. Just take the first step.',
        reversed: 'You\'re feeling aimless or foolishly chasing change for its own sake. Ground yourself before you leap.',
      },
      ex: {
        upright: 'You\'re standing at the edge of a new life. The ghost of your ex is fading because you\'re finally more excited about your future than your past. This is the beginning of your freedom.',
        reversed: 'You\'re paralyzed by the fear of looking stupid if you try again. You\'re staying stuck because you\'re terrified of another fall. But staying frozen isn\'t safety—it\'s just slow suffocation.',
      },
    },
    future: {
      love: {
        upright: 'An unexpected romantic beginning is coming. Someone new will enter your life when you least expect it—stay open.',
        reversed: 'Be cautious of rushing into something that lacks foundation. A "false start" in love awaits if you don\'t slow down.',
      },
      career: {
        upright: 'A brand new professional path is opening. You might start fresh in a new field where you feel like a student again.',
        reversed: 'Watch out for risky opportunities that seem too good. Do your homework before making major career leaps.',
      },
      life: {
        upright: 'A total rebirth awaits. You might move, travel, or completely reinvent yourself. Trust the journey ahead.',
        reversed: 'Avoid leaping blindly into the future. Some preparation is needed before your next big adventure.',
      },
      ex: {
        upright: 'A radical fresh start is coming. You will meet someone who doesn\'t fit your old "type" but reminds you how to breathe again. Your ex will become a distant memory.',
        reversed: 'You\'re headed toward repeating the same pattern with someone new. Until you heal the wound your ex left, you\'ll keep choosing the same pain in different packaging. Do the inner work first.',
      },
    },
  },
  {
    id: 1,
    name: 'The Magician',
    arcana: 'Major',
    vibe: 'The Architect of Reality',
    description: 'The bridge between the divine and the material; taking raw ideas and making them real.',
    url: '/assets/img/cards/magician.jpg',
    past: {
      love: {
        upright: 'You manifested a powerful connection through your confidence and communication. Your words and actions created the love you experienced.',
        reversed: 'Manipulation or deception played a role in a past relationship. Someone used charm as a weapon rather than a gift.',
      },
      career: {
        upright: 'You used your skills masterfully to create success. Your ability to turn ideas into reality shaped your professional path.',
        reversed: 'Misused talents or trickery in business left a complicated legacy. Shortcuts may have backfired.',
      },
      life: {
        upright: 'You took control of your destiny and made things happen. Your willpower and resourcefulness created tangible results.',
        reversed: 'Wasted potential or scattered energy prevented you from achieving your goals. You had the tools but didn\'t use them.',
      },
      ex: {
        upright: 'You and your ex had incredible chemistry—mentally and verbally. When it was good, you could talk for hours and build worlds together with words alone.',
        reversed: 'One of you was a master manipulator. The charm, the promises, the convincing words—it was all smoke and mirrors. You fell for an illusion, not a person. The "magic" was just tricks.',
      },
    },
    present: {
      love: {
        upright: 'You have the power to create the love life you want. Your confidence and communication skills are magnetic right now.',
        reversed: 'Watch for manipulation or love bombing. Someone may not be who they appear to be—or you\'re not being authentic.',
      },
      career: {
        upright: 'You have all the tools and skills needed to succeed. Take initiative and turn your ideas into action now.',
        reversed: 'You\'re blocking your own potential with self-doubt or poor ethics. You have talent but you\'re not using it wisely.',
      },
      life: {
        upright: 'You are capable of manifesting your desires. Focus your energy, use your resources, and create your reality.',
        reversed: 'Lack of focus or misaligned intentions are blocking your progress. Stop scattering your energy everywhere.',
      },
      ex: {
        upright: 'You have every tool you need to rebuild yourself. Stop waiting for them to validate you—the power to heal and thrive is already in your hands. Use it.',
        reversed: 'You\'re either still being manipulated by their memory, or you\'re manipulating yourself with false hope. The texts you\'re composing in your head? Delete them. The power they have over you is power you\'re giving away.',
      },
    },
    future: {
      love: {
        upright: 'You will attract a partner who matches your energy and helps manifest shared dreams. A power couple dynamic awaits.',
        reversed: 'Be wary of charming words without substance. Someone "all talk" may enter your life—look for actions, not promises.',
      },
      career: {
        upright: 'Success through skill mastery is coming. You\'ll have the opportunity to turn a big idea into reality.',
        reversed: 'Shortcuts or deception will catch up with you. Build on solid ground or face consequences.',
      },
      life: {
        upright: 'You\'re moving toward a period of powerful manifestation. What you focus on will become real.',
        reversed: 'Scattered energy may derail your plans. Without focus and integrity, your magic becomes chaos.',
      },
      ex: {
        upright: 'You will meet someone who matches your mental speed and depth. The conversations will be electric, and unlike your ex, this one will be real.',
        reversed: 'Be careful—you might attract another smooth talker. Until you learn to spot the difference between genuine connection and performance, you\'ll keep falling for the same magic trick.',
      },
    },
  },
  {
    id: 2,
    name: 'The High Priestess',
    arcana: 'Major',
    vibe: 'The Sacred Pause',
    description: 'The guardian of the subconscious; wisdom found in silence and non-linear thinking.',
    url: '/assets/img/cards/highPriestess.jpg',
    past: {
      love: {
        upright: 'A deep, intuitive connection existed in a past relationship. You shared an unspoken understanding that went beyond words.',
        reversed: 'Secrets were kept in a past relationship. You ignored your intuition about someone and paid the price.',
      },
      career: {
        upright: 'You followed your intuition in your career and it served you well. Hidden knowledge or behind-the-scenes work shaped your path.',
        reversed: 'Information was withheld from you at work, or you ignored warning signs. Hidden agendas affected your professional life.',
      },
      life: {
        upright: 'A period of deep inner knowing guided your past. You trusted the unseen and it led you where you needed to go.',
        reversed: 'You were disconnected from your intuition. Ignoring your inner voice led to confusion and wrong turns.',
      },
      ex: {
        upright: 'There was a psychic, almost telepathic link between you and your ex. You knew things about them before they said them. That soul-level mystery was real—but mystery alone doesn\'t build a relationship.',
        reversed: 'Secrets destroyed this relationship. Whether they hid things from you or you hid from the truth, the silence between you became a wall. Deep down, you always knew something was wrong. You just didn\'t want to see it.',
      },
    },
    present: {
      love: {
        upright: 'Trust your intuition about romantic matters. The answers you seek are within—be still and listen to your inner voice.',
        reversed: 'You\'re ignoring your gut feeling about someone. Your logical mind is overriding what your soul already knows.',
      },
      career: {
        upright: 'Keep your plans close to your chest for now. Trust your instincts about timing and whom to trust at work.',
        reversed: 'Hidden workplace dynamics are at play. Someone is withholding information, or you\'re not seeing the full picture.',
      },
      life: {
        upright: 'This is a time for stillness and inner reflection. Look beyond the surface—the answers lie in your subconscious.',
        reversed: 'You\'re too busy or distracted to hear your inner wisdom. Reconnect with your intuition before making decisions.',
      },
      ex: {
        upright: 'Stop stalking their social media. Stop asking mutual friends. The universe is telling you to be still because your intuition already knows the truth about them. You don\'t need more information—you need to accept what you already know.',
        reversed: 'You\'re ignoring your gut feeling because you don\'t like what it\'s telling you. Your brain keeps making excuses for them while your soul screams "no." The truth is there. You\'re just choosing not to see it.',
      },
    },
    future: {
      love: {
        upright: 'Hidden truths about love will be revealed. A deep, spiritual connection may enter your life when you least expect it.',
        reversed: 'Secrets may surface that change your perspective on a relationship. Be prepared to face uncomfortable truths.',
      },
      career: {
        upright: 'Hidden opportunities will reveal themselves. Trust your intuition to guide you toward the right professional path.',
        reversed: 'Be cautious of deals that seem too good. Hidden terms or deceptions may become apparent.',
      },
      life: {
        upright: 'Deep spiritual insights await you. The veil between conscious and unconscious will thin, bringing clarity.',
        reversed: 'You\'ll be forced to confront truths you\'ve been avoiding. The universe will lift the veil whether you\'re ready or not.',
      },
      ex: {
        upright: 'You will finally understand the "karmic why" behind this relationship. The spiritual lesson will become clear, and with that clarity comes peace. This wasn\'t random—it was a teaching.',
        reversed: 'A truth you\'ve been hiding from yourself will be exposed. Maybe they weren\'t who you thought. Maybe you weren\'t who you thought with them. Either way, the veil is lifting—get ready to see clearly.',
      },
    },
  },
  {
    id: 3,
    name: 'The Empress',
    arcana: 'Major',
    vibe: 'The Great Mother',
    description: 'Abundance, creation, and the sensory world. Life in full bloom.',
    url: '/assets/img/cards/empress.jpg',
    past: {
      love: {
        upright: 'A past relationship was nurturing, sensual, and full of warmth. You experienced love that felt like coming home.',
        reversed: 'A past relationship was smothering or one-sided. Someone gave too much or took too much, leaving things barren.',
      },
      career: {
        upright: 'A creative project flourished in your past. Your ability to nurture ideas into reality brought abundance.',
        reversed: 'Stifled creativity or lack of growth marked a past role. You felt creatively blocked or undervalued.',
      },
      life: {
        upright: 'You experienced a time of abundance and connection to nature. Life felt fertile, beautiful, and full of potential.',
        reversed: 'You neglected self-care or felt disconnected from abundance. Giving too much left you depleted.',
      },
      ex: {
        upright: 'That relationship felt like home. You nurtured each other, and when it was good, it was beautiful, warm, and abundant. You grew together—for a while.',
        reversed: 'You gave everything to that relationship and got nothing back. Or they smothered you until you couldn\'t breathe. Either way, the garden is dead now because someone forgot that love requires balance, not sacrifice.',
      },
    },
    present: {
      love: {
        upright: 'Love is in full bloom. You\'re radiating feminine energy and attracting abundance in romance. Nurture what\'s growing.',
        reversed: 'You\'re neglecting self-love or feeling creatively and romantically blocked. You can\'t pour from an empty cup.',
      },
      career: {
        upright: 'Creativity and abundance flow in your work. This is a fertile time for projects—nurture your ideas and watch them grow.',
        reversed: 'Creative blocks or lack of inspiration at work. You\'re pushing too hard instead of allowing natural growth.',
      },
      life: {
        upright: 'This is your glow-up phase. Focus on pleasure, self-care, and beauty. You\'re magnetic when you\'re happy and nourished.',
        reversed: 'You\'re feeling emotionally dry and disconnected from your body. Stop pushing and start nurturing yourself first.',
      },
      ex: {
        upright: 'This is your glow-up era. Focus on yourself—good food, soft sheets, self-love. You don\'t need them to feel beautiful. You ARE beautiful, and your next chapter will prove it.',
        reversed: 'You\'re emotionally barren right now, and you\'re blaming your ex for it. But here\'s the truth: you abandoned yourself in that relationship long before they left. Time to mother yourself back to life.',
      },
    },
    future: {
      love: {
        upright: 'Abundant, fertile love is coming. A relationship that feels like home—warm, nurturing, and growth-oriented—awaits.',
        reversed: 'Creative or emotional blocks may affect future relationships. Don\'t let past pain make your heart infertile.',
      },
      career: {
        upright: 'A rich, rewarding creative period approaches. Your projects will bear fruit and bring material abundance.',
        reversed: 'Watch for burnout from overgiving at work. Set boundaries or face creative exhaustion.',
      },
      life: {
        upright: 'A harvest is coming. Your investments in yourself will pay off with abundance, beauty, and a sense of home.',
        reversed: 'You may face stagnation if you keep watering dead things. Redirect your energy to what can actually grow.',
      },
      ex: {
        upright: 'Abundance is coming—whether they return or not. You\'re going to bloom so beautifully that your ex becomes a footnote in your story of growth.',
        reversed: 'If you keep watering the memory of your dead relationship, you\'ll have no energy left for what\'s trying to grow. Let the past compost into wisdom and move on.',
      },
    },
  },
  {
    id: 4,
    name: 'The Emperor',
    arcana: 'Major',
    vibe: 'The Divine Architect',
    description: 'Structure, authority, and the power of logic and protection.',
    url: '/assets/img/cards/emperor.jpg',
    past: {
      love: {
        upright: 'A stable, structured relationship provided security and protection. Someone took the lead and built something solid.',
        reversed: 'A controlling or rigid dynamic marked a past relationship. Power imbalances created resentment.',
      },
      career: {
        upright: 'You achieved success through discipline and structure. Working within hierarchy brought you authority.',
        reversed: 'Power struggles with authority figures or authoritarian bosses affected your past career.',
      },
      life: {
        upright: 'A time of discipline and order shaped your foundation. Structure gave you the stability to grow.',
        reversed: 'Feeling controlled or lacking structure caused past challenges. Too much or too little authority was the problem.',
      },
      ex: {
        upright: 'The relationship had clear structure—one person led, one followed. It felt safe and solid, like a fortress. But fortresses can also become prisons if you\'re not careful.',
        reversed: 'That relationship was about control, not love. Whether they dominated you or you tried to control them, the power dynamic was toxic. Love isn\'t a dictatorship.',
      },
    },
    present: {
      love: {
        upright: 'Setting healthy boundaries in love is essential now. Be the stable, grounded presence your relationship needs.',
        reversed: 'You\'re either too controlling or completely lacking structure in love. Find balance between rigidity and chaos.',
      },
      career: {
        upright: 'Take command and lead with authority. This is a time to build structure and establish your professional power.',
        reversed: 'Power struggles at work are affecting you. You\'re either micromanaging or being micromanaged.',
      },
      life: {
        upright: 'Organize your world. Create systems, set boundaries, and build the structure your life needs to thrive.',
        reversed: 'You\'re feeling out of control or suffocated by too much rigidity. Balance discipline with flexibility.',
      },
      ex: {
        upright: 'You\'re finally setting firm boundaries. Your head is ruling your heart now, and that\'s exactly what you need. Logic over emotion. Structure over chaos. This is how you rebuild.',
        reversed: 'You\'re either trying to control a situation you can\'t control, or you\'ve completely lost your sense of structure since the breakup. Neither extreme helps. Find your backbone without becoming cold.',
      },
    },
    future: {
      love: {
        upright: 'A stable, protected partnership awaits. Someone who provides security and structure is coming into your life.',
        reversed: 'Watch for power struggles in future relationships. Unresolved authority issues could resurface.',
      },
      career: {
        upright: 'You\'re building your empire. Leadership and authority in your field are coming—prepare to take charge.',
        reversed: 'Be careful of becoming tyrannical or facing off against controlling forces at work.',
      },
      life: {
        upright: 'Total stability and security are ahead. The structure you\'re building now will protect you for years.',
        reversed: 'Balance structure with flexibility, or your life becomes a cage of your own making.',
      },
      ex: {
        upright: 'Closure will come through structure, not drama. Legal matters, clear conversations, or simply your own firm decision will end this chapter properly.',
        reversed: 'If you don\'t establish clear boundaries, this power struggle with your ex will continue. They\'ll keep pushing until you stop bending. Be the Emperor of your own life.',
      },
    },
  },
  {
    id: 5,
    name: 'The Hierophant',
    arcana: 'Major',
    vibe: 'The Keeper of Tradition',
    description: 'Mentorship, institutional wisdom, and the search for spiritual meaning within structure.',
    url: '/assets/img/cards/hierophant.jpg',
    past: {
      love: {
        upright: 'A traditional approach to love served you well. Commitment, shared values, and conventional milestones marked the relationship.',
        reversed: 'Clashing values or rebellion against relationship conventions caused problems. You didn\'t fit the traditional mold.',
      },
      career: {
        upright: 'Working within established systems brought success. Corporate structure or traditional paths shaped your career.',
        reversed: 'You felt stifled by corporate hierarchy or institutional rules. Conformity wasn\'t for you.',
      },
      life: {
        upright: 'Traditional beliefs and mentorship guided your path. You found meaning in established systems.',
        reversed: 'You rejected tradition without finding something to replace it. Spiritual rebellion left you unmoored.',
      },
      ex: {
        upright: 'This was a "by the book" relationship—maybe you talked about marriage, met the parents, followed the traditional path. On paper, it looked perfect.',
        reversed: 'You two had fundamentally different values, and one of you refused to compromise. Maybe religion, family expectations, or "how things should be done" tore you apart. The institution of the relationship couldn\'t survive the clash.',
      },
    },
    present: {
      love: {
        upright: 'You\'re seeking commitment and traditional values in love. Marriage, engagement, or formalizing a bond may be on your mind.',
        reversed: 'You\'re either too rigid in your expectations or rejecting all conventional relationship wisdom. Find balance.',
      },
      career: {
        upright: 'Follow established protocols and proven paths. Learn from mentors and work within the system for now.',
        reversed: 'You\'re questioning institutional wisdom or feeling called to break from tradition at work.',
      },
      life: {
        upright: 'Seek guidance from a mentor, counselor, or spiritual teacher. Traditional wisdom has something to offer you now.',
        reversed: 'You\'re feeling spiritually lost or rejecting all guidance. Be careful of throwing out wisdom with rebellion.',
      },
      ex: {
        upright: 'You\'re seeking counsel—therapy, trusted friends, spiritual guidance—to understand what happened. That\'s healthy. The meaning will come through reflection and wisdom, not rumination.',
        reversed: 'You\'re either stuck in dogmatic thinking about what "should have been" or rejecting every piece of advice people give you. Neither extreme helps. Open your ears without losing your own truth.',
      },
    },
    future: {
      love: {
        upright: 'Marriage or a deeply committed, traditional partnership is on the horizon. Shared values will be the foundation.',
        reversed: 'Be careful of repeating old patterns or seeking validation from institutions that don\'t serve you.',
      },
      career: {
        upright: 'Achieving status, tenure, or recognition within established systems awaits. The traditional path pays off.',
        reversed: 'Don\'t blindly follow the crowd. Sometimes breaking from convention is the right career move.',
      },
      life: {
        upright: 'You\'ll find your spiritual community and a belief system that feels like home.',
        reversed: 'You may need to create your own path. Established traditions won\'t fit everyone.',
      },
      ex: {
        upright: 'You will reach a place of spiritual understanding about this relationship. The "sacred lesson" will become clear, and you\'ll be grateful for the teaching even if the pain remains.',
        reversed: 'Stop trying to make the relationship fit a template it never matched. And stop seeking validation from people who weren\'t in it. The only teacher who matters now is your own experience.',
      },
    },
  },
  {
    id: 6,
    name: 'The Lovers',
    arcana: 'Major',
    vibe: 'The Sacred Alignment',
    description: 'Harmony of opposites; a choice made from the heart rather than the ego.',
    url: '/assets/img/cards/lovers.jpg',
    past: {
      love: {
        upright: 'You made a major choice in love that defined your path. A deep, harmonious connection showed you what true partnership feels like.',
        reversed: 'A painful choice or misalignment in a past relationship left unresolved feelings. You may have sacrificed your values.',
      },
      career: {
        upright: 'A significant partnership or merger shaped your career. Aligning with the right people brought success.',
        reversed: 'A values clash or broken partnership created complications in your professional history.',
      },
      life: {
        upright: 'A fork in the road led you to where you are. A defining choice aligned you with your true path.',
        reversed: 'You chose poorly at a crossroads, or internal conflict prevented you from committing to a direction.',
      },
      ex: {
        upright: 'This wasn\'t just a relationship—it was a choice that defined who you were becoming. You experienced soulmate-level alignment. You learned what it feels like to be truly "one" with someone.',
        reversed: 'You sacrificed yourself to keep this connection alive. You abandoned your own values, ignored your own needs, and chose them over you. That choice cost you—and you\'re still paying the price.',
      },
    },
    present: {
      love: {
        upright: 'Deep attraction and perfect alignment are present in your love life. A meaningful relationship choice is before you.',
        reversed: 'You\'re out of alignment in love. Values are clashing, or you\'re avoiding a decision you need to make.',
      },
      career: {
        upright: 'Align your work with your values. A partnership or collaboration that resonates with your core is possible now.',
        reversed: 'Your values don\'t match your current work situation. A partnership may be going sour.',
      },
      life: {
        upright: 'You\'re at a crossroads. Make a choice that aligns with your heart and your values—not just one or the other.',
        reversed: 'You\'re at war with yourself over a major decision. Head and heart are pulling in different directions.',
      },
      ex: {
        upright: 'You\'re facing a major decision about your ex—or about who you want to become after them. This isn\'t just about them; it\'s about which version of yourself you choose to be moving forward.',
        reversed: 'Your head says "leave them behind" but your heart keeps pulling back. This internal war is exhausting you. The truth is, you already know what you need to do—you\'re just afraid to do it.',
      },
    },
    future: {
      love: {
        upright: 'A sacred union is approaching. Someone with whom you can be completely yourself—total harmony and authentic love—awaits.',
        reversed: 'A difficult choice in love is coming. You may have to choose between comfort and growth.',
      },
      career: {
        upright: 'A significant professional partnership or a choice between two paths will shape your future.',
        reversed: 'Be cautious of commitments that don\'t align with your values. A mismatch could cause problems.',
      },
      life: {
        upright: 'A life-changing decision is coming. Trust your heart and your values to guide you to the right path.',
        reversed: 'A crossroads approaches. Don\'t let fear make the decision for you—own your choice.',
      },
      ex: {
        upright: 'Someone new is coming who will fit with you in ways your ex never did. This future love won\'t require you to shrink yourself to be accepted—it will be true harmony.',
        reversed: 'A difficult choice is coming: hold onto the fantasy of what your ex "could have been" or release it and choose growth. One path keeps you stuck. The other sets you free. Choose wisely.',
      },
    },
  },
  {
    id: 7,
    name: 'The Chariot',
    arcana: 'Major',
    vibe: 'The Disciplined Will',
    description: 'Victory through focus and the control of opposing forces.',
    url: '/assets/img/cards/chariot.jpg',
    past: {
      love: {
        upright: 'A fast-moving romance that swept you off your feet. Determination and drive characterized the connection.',
        reversed: 'A loss of control or directionless energy derailed a past relationship. Things moved too fast or crashed.',
      },
      career: {
        upright: 'You achieved victory through sheer determination and focus. Aggressive goal-seeking paid off.',
        reversed: 'Burnout from pushing too hard, or a loss of direction derailed your professional progress.',
      },
      life: {
        upright: 'You overcame obstacles through willpower and focused determination. Travel or rapid change defined this period.',
        reversed: 'You felt stuck, scattered, or out of control. Internal conflicts prevented forward movement.',
      },
      ex: {
        upright: 'You were both driven, ambitious people—but you were driving in different directions. The relationship moved fast, maybe too fast to notice you weren\'t headed to the same destination.',
        reversed: 'One or both of you completely lost control. Whether it was emotions, circumstances, or just chaos—the wheels came off and the crash was inevitable.',
      },
    },
    present: {
      love: {
        upright: 'Use willpower to stay focused on what you want in love. Victory in romance comes through discipline and clarity.',
        reversed: 'You\'re being pulled in two directions emotionally. Without clarity, you\'ll stall out or crash.',
      },
      career: {
        upright: 'Charge forward with determination. You have the drive and focus to achieve victory now.',
        reversed: 'You\'re losing control of your direction at work. Scattered energy is sabotaging your progress.',
      },
      life: {
        upright: 'Stay focused and keep moving. Your determination will carry you past current obstacles.',
        reversed: 'Internal conflict is tearing you apart. You can\'t move forward while fighting yourself.',
      },
      ex: {
        upright: 'You\'re using every ounce of willpower to maintain no-contact or stay in control of your emotions. This takes enormous discipline—and you\'re doing it.',
        reversed: 'You\'re a mess of conflicting impulses. One minute you want to text them, the next you want to block them forever. This internal tug-of-war is exhausting you. Pick a direction.',
      },
    },
    future: {
      love: {
        upright: 'Rapid progress in love is coming. Moving in together, engagement, or a relationship that accelerates quickly awaits.',
        reversed: 'Don\'t force movement before you\'re ready. Rushing could lead to a crash.',
      },
      career: {
        upright: 'Total professional victory is ahead. Your determination will pay off with a significant win.',
        reversed: 'Reckless ambition could backfire. Know when to slow down.',
      },
      life: {
        upright: 'You will overcome all obstacles in your path. Victory through focused willpower is assured.',
        reversed: 'Going too fast could cause a crash. Balance drive with awareness.',
      },
      ex: {
        upright: 'Someone is about to make a decisive move. Either you\'ll charge forward into a new chapter, or they\'ll suddenly reappear with determination. Either way, the limbo ends.',
        reversed: 'If you keep going at this pace—obsessing, stalking, or forcing closure—you\'re going to crash. Slow down before you wreck yourself emotionally.',
      },
    },
  },
  {
    id: 8,
    name: 'Strength',
    arcana: 'Major',
    vibe: 'The Gentle Lion',
    description: 'Inner power, courage, and compassion.',
    url: '/assets/img/cards/strength.jpg',
    past: {
      love: {
        upright: 'You showed patience and gentle strength in a past relationship. Taming wild emotions with compassion was your gift.',
        reversed: 'Raw, untamed emotions or lack of patience eroded a past connection. Someone lost control.',
      },
      career: {
        upright: 'You handled professional stress with grace and inner confidence. Your calm strength got you through.',
        reversed: 'You lost your composure under pressure, or self-doubt undermined your professional confidence.',
      },
      life: {
        upright: 'You survived a trial that required deep inner strength. Your courage and compassion carried you through.',
        reversed: 'You gave in to fear, weakness, or impulse. A lack of inner control led to difficult consequences.',
      },
      ex: {
        upright: 'That relationship required immense patience—taming intense emotions, yours or theirs, with a gentle hand. You showed strength by staying soft when everything wanted to make you hard.',
        reversed: 'One of you couldn\'t control yourselves. Rage, jealousy, insecurity, neediness—the raw, untamed emotions eventually destroyed what you had. Passion without restraint is just destruction.',
      },
    },
    present: {
      love: {
        upright: 'Approach love with gentle strength. Patience and compassion will win where force cannot.',
        reversed: 'You\'re giving in to impulses or feeling weak in matters of the heart. Find your inner lion.',
      },
      career: {
        upright: 'Confidence in your abilities is high. Handle challenges with calm strength and you\'ll prevail.',
        reversed: 'Self-doubt or imposter syndrome is undermining you. Your weakness is in your head, not your skills.',
      },
      life: {
        upright: 'Tame your inner beast with compassion, not force. True strength is gentle, patient, and unshakeable.',
        reversed: 'Inner battles are raging. You\'re struggling with self-control or giving in to fear.',
      },
      ex: {
        upright: 'You\'re using every ounce of inner strength to not reach out, not stalk their socials, not break. This quiet power is more impressive than any dramatic gesture. Keep going.',
        reversed: 'You keep giving in to the urge to check on them, text them, or fall apart. Be gentle with yourself—but also know that strength means learning to sit with discomfort without acting on it.',
      },
    },
    future: {
      love: {
        upright: 'A love built on mutual strength, patience, and forgiveness awaits. Deep bonds form through gentle power.',
        reversed: 'Lingering resentment or self-doubt may sabotage future relationships. Do the inner work first.',
      },
      career: {
        upright: 'You\'ll master a challenging role through patience and inner confidence. Your quiet strength will be recognized.',
        reversed: 'Don\'t let challenges break your spirit. You\'re stronger than you think—but you need to believe it.',
      },
      life: {
        upright: 'Unshakeable inner peace is coming. You\'ll reach a place where nothing external can disturb your center.',
        reversed: 'The lion within still needs taming. Until you master yourself, external peace will remain elusive.',
      },
      ex: {
        upright: 'You will find the strength to truly forgive—them and yourself. Not weak forgiveness that lets them back in, but powerful forgiveness that sets you completely free.',
        reversed: 'If you don\'t tame your resentment, it will eat you alive. The anger, the hurt, the obsessive thoughts—they\'re a lion you haven\'t learned to control yet. This is your work.',
      },
    },
  },
  {
    id: 9,
    name: 'The Hermit',
    arcana: 'Major',
    vibe: 'The Lantern of Truth',
    description: 'Solitude, introspection, and seeking the light within.',
    url: '/assets/img/cards/hermit.jpg',
    past: {
      love: {
        upright: 'A period of healthy solitude shaped your understanding of love. Time alone taught you valuable lessons.',
        reversed: 'Isolation or emotional withdrawal damaged a past connection. Someone shut down when presence was needed.',
      },
      career: {
        upright: 'You developed expertise through solitary focus and research. Working alone sharpened your skills.',
        reversed: 'Too much isolation hurt your career. Avoiding collaboration or mentorship held you back.',
      },
      life: {
        upright: 'A period of deep reflection and soul-searching gave you wisdom. Solitude was your teacher.',
        reversed: 'Unhealthy withdrawal from the world caused you to lose touch with yourself and others.',
      },
      ex: {
        upright: 'Soul-searching played a role in this relationship\'s story. Either introspection led to the breakup, or it\'s what you needed afterward to understand what happened.',
        reversed: 'One of you emotionally checked out. The silence, the withdrawal, the refusal to engage—isolation killed what could have been saved with presence.',
      },
    },
    present: {
      love: {
        upright: 'This is a time to step back from dating and focus inward. Healthy solitude will prepare you for better love.',
        reversed: 'There\'s a difference between healing alone and hiding alone. Make sure you\'re the former, not the latter.',
      },
      career: {
        upright: 'Focus on deep work, research, and developing your expertise. This is not a time for networking—it\'s a time for mastery.',
        reversed: 'You\'re avoiding collaboration or guidance when you need it. Don\'t let isolation become professional exile.',
      },
      life: {
        upright: 'Seek the light within. This period of solitude is necessary for finding your own truth and wisdom.',
        reversed: 'You\'re getting lost in the dark, mistaking isolation for introspection. There\'s no wisdom in hiding.',
      },
      ex: {
        upright: 'No contact is the right move. You\'re looking inward, doing the real work, and finding the truth of why it didn\'t work. This hermit phase will give you answers no conversation with them ever could.',
        reversed: 'Be honest: are you healing in solitude or just hiding from pain? Scrolling their social media alone in your room isn\'t introspection—it\'s avoidance. True hermit energy means turning the light inward, not wallowing in darkness.',
      },
    },
    future: {
      love: {
        upright: 'After this period of solitude, you\'ll attract a wise, mature partner. Someone who values depth over drama.',
        reversed: 'Prolonged isolation could become a pattern. Know when it\'s time to emerge and let love in again.',
      },
      career: {
        upright: 'You\'ll become a recognized expert through deep, focused work. Your solitary efforts will be rewarded.',
        reversed: 'Don\'t become professionally isolated by choice. Connection and collaboration will be needed.',
      },
      life: {
        upright: 'Deep spiritual clarity awaits. The wisdom you\'re cultivating in solitude will illuminate your entire path.',
        reversed: 'Know when to come back into the light. Eternal hermit mode isn\'t enlightenment—it\'s avoidance.',
      },
      ex: {
        upright: 'You will emerge from this hermit phase knowing exactly why that relationship wasn\'t right. The light you\'re seeking will reveal that you\'re better alone than poorly accompanied.',
        reversed: 'If you don\'t eventually emerge from this cave, you\'ll miss what\'s waiting for you in the light. Healing is the goal—not permanent isolation. Don\'t let your ex be the reason you never open up again.',
      },
    },
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    arcana: 'Major',
    vibe: 'The Cosmic Cycle',
    description: 'Change, luck, and inevitable cycles.',
    url: '/assets/img/cards/wheeloffortune.jpg',
    past: {
      love: {
        upright: 'Fate played a role in a past love. Lucky timing or destined circumstances brought someone special into your life.',
        reversed: 'Bad timing or a string of misfortune affected past relationships. The wheel was on a downward turn.',
      },
      career: {
        upright: 'A lucky break or fortunate turn shaped your professional journey. You were in the right place at the right time.',
        reversed: 'Setbacks and delays created challenges you\'re still processing. The wheel brought you down for a reason.',
      },
      life: {
        upright: 'You\'ve experienced the highs of fate\'s cycle. Things aligned as if the stars themselves were on your side.',
        reversed: 'You went through a period where everything seemed to go wrong. The universe was testing your resilience.',
      },
      ex: {
        upright: 'Meeting your ex felt fated. The timing, the circumstances, the way it all fell into place—it seemed like destiny. And maybe it was. But fate brings lessons, not always happily-ever-afters.',
        reversed: 'Bad timing ruined what might have worked. Or maybe fate was protecting you from something worse by ending it when it did. Either way, the wheel turned, and here you are.',
      },
    },
    present: {
      love: {
        upright: 'The tides are turning in your love life. Change is happening—embrace it rather than resist it.',
        reversed: 'You\'re resisting a necessary transition in love. The wheel turns whether you like it or not.',
      },
      career: {
        upright: 'Change is coming at work—stay adaptable. The tide is shifting in your favor if you move with it.',
        reversed: 'External factors are causing setbacks. This isn\'t permanent, but you need to wait for the wheel to turn.',
      },
      life: {
        upright: 'The only constant right now is change. Stay centered as the wheel spins—what goes down must come up.',
        reversed: 'You\'re feeling like a victim of circumstance, waiting for fate to save you. Take the wheel yourself.',
      },
      ex: {
        upright: 'The cycle is shifting. If you\'ve been down, you\'re coming up. This heartbreak is part of a larger turning—your luck in love is about to change.',
        reversed: 'You\'re stuck in a karmic loop, blaming fate for your situation. "Why me? Why did this happen?" The truth is, the wheel gives you what you need, not what you want. Stop waiting for fate to fix this.',
      },
    },
    future: {
      love: {
        upright: 'A major turning point in your love life approaches. Destiny is moving pieces into place.',
        reversed: 'Prepare for ups and downs. Don\'t cling too tightly to how things are—change is coming.',
      },
      career: {
        upright: 'Fortune favors you. A significant opportunity is spinning toward you—be ready to grab it.',
        reversed: 'Don\'t rely solely on luck. The wheel may turn unexpectedly—have a backup plan.',
      },
      life: {
        upright: 'A new cycle begins. What goes around comes around, and your turn for good fortune is approaching.',
        reversed: 'Repetitive patterns will keep returning until you break them. The wheel will bring you back to this lesson.',
      },
      ex: {
        upright: 'A sudden, unexpected shift is coming. Whether it\'s a random encounter with someone new or a moment of total clarity about your ex—fate is about to move.',
        reversed: 'If you don\'t break this cycle, the wheel will bring you back to this same type of heartbreak with someone new. Different face, same pattern. Learn the lesson or repeat the class.',
      },
    },
  },
  {
    id: 11,
    name: 'Justice',
    arcana: 'Major',
    vibe: 'The Great Equalizer',
    description: 'Fairness, truth, and cause and effect.',
    url: '/assets/img/cards/justice.jpg',
    past: {
      love: {
        upright: 'A past relationship was fair and balanced. What you gave, you received. Karma was in equilibrium.',
        reversed: 'Injustice or unfairness marked a past relationship. The scales were never balanced.',
      },
      career: {
        upright: 'You received what you earned professionally. Your efforts were fairly rewarded.',
        reversed: 'You experienced unfairness at work—being passed over, blamed unjustly, or treated inequitably.',
      },
      life: {
        upright: 'Cause and effect played out clearly in your past. You reaped what you sowed.',
        reversed: 'You felt the sting of injustice. Karma seemed to fail you, or consequences were delayed.',
      },
      ex: {
        upright: 'There was a fundamental fairness to that relationship, even if it ended. Both of you contributed to what it became—good and bad.',
        reversed: 'That relationship was never fair. One of you gave more, sacrificed more, tried more. The scales were always tipped, and deep down, you knew it.',
      },
    },
    present: {
      love: {
        upright: 'Seek balance and fairness in your love life. What you put in is what you\'ll get back.',
        reversed: 'There\'s an imbalance in your current romantic situation. Something isn\'t fair.',
      },
      career: {
        upright: 'Make decisions based on logic and fairness. The truth will serve you better than shortcuts.',
        reversed: 'You\'re experiencing or creating unfairness at work. Examine your role in the imbalance.',
      },
      life: {
        upright: 'Truth and accountability are required now. Own your actions and their consequences.',
        reversed: 'You\'re avoiding accountability or experiencing the consequences of past actions.',
      },
      ex: {
        upright: 'Look at the relationship honestly—not through rose-colored glasses or bitter lenses. What was your role? What was theirs? Justice demands truth, not blame or martyrdom.',
        reversed: 'You\'re either not taking responsibility for your part, or you\'re taking all the blame when it wasn\'t all yours. Neither is just. Find the real truth.',
      },
    },
    future: {
      love: {
        upright: 'Fair and balanced love awaits. What you seek is seeking you—as long as you\'re offering the same.',
        reversed: 'Watch for imbalanced dynamics in future relationships. Don\'t accept less than you give.',
      },
      career: {
        upright: 'Justice will prevail in your professional life. Your efforts will be recognized and rewarded fairly.',
        reversed: 'Be prepared for delayed justice or unforeseen consequences of past professional choices.',
      },
      life: {
        upright: 'Karma will balance the scales. Truth will be revealed, and fairness will prevail.',
        reversed: 'Avoid cutting corners or being dishonest—consequences will catch up eventually.',
      },
      ex: {
        upright: 'Closure will come through clarity. The truth about why it ended will finally settle, and you\'ll find peace in understanding the balance of it all.',
        reversed: 'If you keep avoiding the truth about what went wrong, justice—karma—will keep bringing similar lessons. Face it honestly or face it again.',
      },
    },
  },
  {
    id: 12,
    name: 'The Hanged Man',
    arcana: 'Major',
    vibe: 'The Sacred Perspective',
    description: 'Surrender, let-go, and seeing things differently.',
    url: '/assets/img/cards/hangedman.jpg',
    past: {
      love: {
        upright: 'A period of suspension in love taught you patience. Waiting and seeing things differently brought insight.',
        reversed: 'You waited too long or sacrificed needlessly in a past relationship. The pause became stagnation.',
      },
      career: {
        upright: 'A career pause or delay ultimately gave you a new perspective. The waiting had purpose.',
        reversed: 'Feeling stuck professionally, you resisted the lessons the pause was trying to teach.',
      },
      life: {
        upright: 'A period of limbo or suspension allowed you to see life from a completely different angle.',
        reversed: 'You resisted necessary surrender and made the delay harder than it needed to be.',
      },
      ex: {
        upright: 'At some point, you or they chose to pause—to see the relationship from a different angle. That suspended moment, however uncomfortable, brought clarity you couldn\'t have found otherwise.',
        reversed: 'You sacrificed too much, waited too long, hung upside-down hoping they\'d change. That martyrdom wasn\'t noble—it was self-abandonment disguised as love.',
      },
    },
    present: {
      love: {
        upright: 'This is a time to pause, not act. Let go of what you think should happen and see what actually is.',
        reversed: 'You\'re stuck in limbo, but it\'s because you\'re resisting the lesson. Stop fighting the pause.',
      },
      career: {
        upright: 'Surrender to the current delay. This professional pause is giving you a perspective you couldn\'t get otherwise.',
        reversed: 'You\'re making the waiting harder by refusing to accept it. Let go of the timeline you expected.',
      },
      life: {
        upright: 'Hang in suspension and see things from a new angle. Sometimes the best action is non-action.',
        reversed: 'You\'re stuck because you won\'t surrender. The harder you struggle, the longer you stay suspended.',
      },
      ex: {
        upright: 'Stop trying to force movement. This period of suspension—this not-knowing—is exactly what you need. Let yourself hang here and see the relationship from a completely new perspective.',
        reversed: 'You\'ve been suspended in this pain for too long because you refuse to let go. This isn\'t patience; it\'s paralysis. The limbo only ends when you stop gripping and start surrendering.',
      },
    },
    future: {
      love: {
        upright: 'After this period of waiting, you\'ll see love from an entirely new perspective. The pause will have been worth it.',
        reversed: 'If you don\'t learn to surrender, you\'ll keep finding yourself in limbo. Let go of control.',
      },
      career: {
        upright: 'A new perspective on your career is coming. The current pause is preparing you for a breakthrough.',
        reversed: 'Continued resistance to change will prolong your professional stagnation.',
      },
      life: {
        upright: 'Enlightenment comes through surrender. The new perspective you\'re gaining will transform your entire life.',
        reversed: 'Until you learn to let go, you\'ll keep repeating the same suspended state.',
      },
      ex: {
        upright: 'One day soon, you\'ll look back and understand exactly why this pause was necessary. The perspective shift coming will make everything make sense.',
        reversed: 'If you keep refusing to surrender and release, you\'ll stay hanging here indefinitely. The chains are in your hands. Let go.',
      },
    },
  },
  {
    id: 13,
    name: 'Death',
    arcana: 'Major',
    vibe: 'The Great Transformation',
    description: 'Endings, transition, and clearing the path.',
    url: '/assets/img/cards/death.jpg',
    past: {
      love: {
        upright: 'A significant ending in love transformed you. That relationship had to die for you to grow into who you are now.',
        reversed: 'You clung to a dead relationship for too long. The slow decay caused more suffering than a clean cut would have.',
      },
      career: {
        upright: 'A professional ending cleared the path for new opportunities. Something had to die for something better to be born.',
        reversed: 'You refused to let go of an old role, identity, or way of working until you were forced to.',
      },
      life: {
        upright: 'A profound transformation reshaped who you are. You\'ve been through the fire and emerged different.',
        reversed: 'You resisted necessary change and stayed in decay longer than needed. The death was prolonged unnecessarily.',
      },
      ex: {
        upright: 'That relationship had to die. No matter how much you loved it, it was blocking the person you needed to become. The ending, as brutal as it was, saved your future self.',
        reversed: 'The relationship was dead long before either of you admitted it. You watched it rot, hoping it would revive, but all you did was prolong the decay and your own suffering.',
      },
    },
    present: {
      love: {
        upright: 'A phase of love is ending to make room for something new. Don\'t fear the death—fear staying the same.',
        reversed: 'You\'re holding onto something that\'s already over. Release it so your hands are free for what\'s next.',
      },
      career: {
        upright: 'A professional chapter is closing. Let it go gracefully—transformation awaits on the other side.',
        reversed: 'Fear of change is keeping you stuck in a dying situation. The corpse you\'re clinging to is your own growth.',
      },
      life: {
        upright: 'Something must die so something better can be born. You\'re in the dark room between who you were and who you\'re becoming.',
        reversed: 'You\'re carrying a ghost of the past. It\'s time to bury what no longer serves you and walk away from the grave.',
      },
      ex: {
        upright: 'You\'re in the dark room right now—the space between your old self and your new self. Don\'t rush the transformation. Let the person who loved them die so the person who deserves better can be born.',
        reversed: 'You\'re trying to resurrect something that is permanently dead. They\'re not coming back, and even if they did, the relationship you had is gone forever. Stop performing CPR on a corpse.',
      },
    },
    future: {
      love: {
        upright: 'A metamorphosis in love is coming. Out with the old, in with the new. The ending makes room for a beautiful beginning.',
        reversed: 'An ending you\'ve been avoiding will force itself eventually. Better to choose it than have it thrust upon you.',
      },
      career: {
        upright: 'Prepare for a significant professional shift. The old way of working is ending to make room for evolution.',
        reversed: 'Resisting inevitable change will only delay your growth. The death will come whether you\'re ready or not.',
      },
      life: {
        upright: 'Total transformation awaits. You\'ll look back in months and barely recognize who you were. This is rebirth.',
        reversed: 'The longer you resist the necessary ending, the harder the transition will be when it\'s forced on you.',
      },
      ex: {
        upright: 'Six months from now, you won\'t recognize the person crying over your ex today. This death is creating a clean slate for a version of you who doesn\'t need them.',
        reversed: 'Because you won\'t let this relationship die, the universe will eventually blow the door off the hinges. You can end it with grace, or it will end you with force. Choose.',
      },
    },
  },
  {
    id: 14,
    name: 'Temperance',
    arcana: 'Major',
    vibe: 'The Divine Alchemist',
    description: 'Balance, moderation, and blending opposites.',
    url: '/assets/img/cards/temperance.jpg',
    past: {
      love: {
        upright: 'Your past relationships taught you the value of compromise and why rushing into things usually ends in a mess.',
        reversed: 'You likely experienced a "hot and cold" dynamic that left you feeling emotionally drained and confused.',
      },
      career: {
        upright: 'You succeeded by being the bridge between people. Your ability to negotiate was your greatest strength.',
        reversed: 'You likely experienced a "burnout" phase because you couldn\'t say no. You were pouring from an empty cup and the quality of your work suffered.',
      },
      life: {
        upright: 'You\'ve recently come through a period where you had to balance many heavy plates at once. You did it well.',
        reversed: 'You went through a period where everything felt chaotic. Your health, your habits, and your schedule were all "clashing" rather than flowing.',
      },
      ex: {
        upright: 'You walked a path of peace together, even during the end. You learned how to stay calm when things felt unstable.',
        reversed: 'The relationship was "oil and water"—you tried so hard to mix, but you were fundamentally out of sync.',
      },
    },
    present: {
      love: {
        upright: 'Love right now is about "testing the waters." Take it slow; let the connection grow naturally like a fine wine.',
        reversed: 'There is an imbalance in your current dating life. One person is giving too much, while the other is withdrawing.',
      },
      career: {
        upright: 'Don\'t force a decision today. Blend your creative ideas with practical logic and wait for the perfect timing.',
        reversed: 'Your work-life balance is currently non-existent. You are rushing through tasks and making small errors. The universe is telling you to slow down before you\'re forced to.',
      },
      life: {
        upright: 'The universe is asking you for patience. Avoid extremes right now. Drink water, rest, and find your center.',
        reversed: 'You are currently "out of sync" with yourself. You might be ignoring your physical health or your spiritual needs. It\'s time to find your "middle ground" again.',
      },
      ex: {
        upright: 'You are currently learning to blend your past lessons with your new life. You\'re finding a "new normal" without them.',
        reversed: 'You are currently feeling "off-balance." You might be over-indulging or over-thinking to avoid the pain.',
      },
    },
    future: {
      love: {
        upright: 'You are headed toward a soulmate who perfectly complements your energy. It won\'t be a storm; it will be a sunset.',
        reversed: 'You must re-learn how to be happy alone before a new partner can bring you the balance you seek.',
      },
      career: {
        upright: 'You will find a role that feels like a perfect "fit"—where your work and your personal peace finally align.',
        reversed: 'If you don\'t change your pace, you\'ll hit a wall. You need to learn that "busy" does not always mean "productive." Start delegating and stop over-extending.',
      },
      life: {
        upright: 'You are becoming "the alchemist" of your own life, turning your past leaden struggles into spiritual gold.',
        reversed: 'You will be challenged to find peace in a noisy environment. The lesson is to build an inner sanctuary that doesn\'t depend on the outside world being perfect.',
      },
      ex: {
        upright: 'A beautiful, quiet healing is coming. You will reach a place where the thought of them no longer disturbs your peace.',
        reversed: 'You need to stop trying to "fix" what is broken. Peace will only come when you stop fighting the reality.',
      },
    },
  },
  {
    id: 15,
    name: 'The Devil',
    arcana: 'Major',
    vibe: 'The Shadow Bond',
    description: 'Attachment, temptation, and the material world.',
    url: '/assets/img/cards/devil.jpg',
    past: {
      love: {
        upright: 'A past relationship was built on temptation, obsession, or unhealthy attachment. The passion was intoxicating but binding.',
        reversed: 'You broke free from a toxic or addictive love pattern. The chains fell off, even though it hurt.',
      },
      career: {
        upright: 'You felt trapped in a job—staying for money, security, or fear. Golden handcuffs kept you bound.',
        reversed: 'You escaped a toxic work environment or broke free from materialistic motivations.',
      },
      life: {
        upright: 'You struggled with addiction, ego, or shadow behaviors. Something had unhealthy control over you.',
        reversed: 'You faced your demons and began breaking free from patterns that imprisoned you.',
      },
      ex: {
        upright: 'That relationship was an addiction. The highs were high, the lows were low, and you couldn\'t stop going back for more. You were chained to them—not by love, but by something darker.',
        reversed: 'You eventually broke free from that toxic bond, but it took everything you had. The chains weren\'t locked—you just didn\'t realize you could take them off.',
      },
    },
    present: {
      love: {
        upright: 'Intense attraction or unhealthy attachment is present. Is this love or addiction? Know the difference.',
        reversed: 'You\'re beginning to see the chains in your love life. Breaking free from toxic patterns is possible now.',
      },
      career: {
        upright: 'You\'re being tempted by shortcuts, unethical choices, or staying somewhere toxic for the wrong reasons.',
        reversed: 'You\'re recognizing the golden handcuffs at work. Freedom is possible if you choose it.',
      },
      life: {
        upright: 'You\'re facing your shadow side—addictions, temptations, or unhealthy attachments. Don\'t pretend they\'re not there.',
        reversed: 'You\'re breaking free from what once controlled you. The chains are loosening.',
      },
      ex: {
        upright: 'You\'re still chained to them. The obsessive thoughts, the checking their social media, the inability to move on—this isn\'t grief, it\'s bondage. They have power over you, and some sick part of you likes it.',
        reversed: 'You\'re starting to see the chains for what they are. The addiction to them is weakening. Keep pulling—freedom is close.',
      },
    },
    future: {
      love: {
        upright: 'You\'ll develop the wisdom to recognize red flags and toxic patterns before you\'re chained again.',
        reversed: 'Full liberation from unhealthy love patterns is coming. You won\'t be fooled by the same temptations.',
      },
      career: {
        upright: 'You\'ll find the courage to leave a toxic work situation or resist tempting shortcuts.',
        reversed: 'Breaking free from professional bondage is on the horizon. The golden handcuffs are coming off.',
      },
      life: {
        upright: 'Liberation from whatever holds you back is possible. Face your shadows and break the chains.',
        reversed: 'You will overcome the addictions and patterns that have controlled you. Freedom awaits.',
      },
      ex: {
        upright: 'One day the chains will fall off and you\'ll wonder why you ever let them have so much power. The bondage will end—but only when you stop romanticizing the captivity.',
        reversed: 'Complete liberation from this toxic bond is coming. You\'ll look back and be amazed you ever gave them your power. The chains were always an illusion.',
      },
    },
  },
  {
    id: 16,
    name: 'The Tower',
    arcana: 'Major',
    vibe: 'The Lightning Bolt of Truth',
    description: 'Sudden upheaval, revelation, and chaos.',
    url: '/assets/img/cards/tower.jpg',
    past: {
      love: {
        upright: 'A shocking revelation shattered a relationship. Lightning struck and everything changed in an instant.',
        reversed: 'You resisted a necessary collapse in love. The slow crumble was harder than a clean break would have been.',
      },
      career: {
        upright: 'A sudden job loss, project failure, or career upheaval forced you to rebuild from the ground up.',
        reversed: 'You avoided a necessary professional collapse, but the unstable structure still haunts you.',
      },
      life: {
        upright: 'A crisis struck without warning and forced you to change. The tower fell, but you survived.',
        reversed: 'You resisted necessary destruction, prolonging chaos instead of allowing the clean collapse.',
      },
      ex: {
        upright: 'That breakup hit like lightning. One moment everything seemed fine; the next, the whole relationship was in ruins. The explosion was violent, but it cleared the way for truth.',
        reversed: 'You saw the tower crumbling for a long time but refused to evacuate. The prolonged collapse caused more damage than a sudden strike would have.',
      },
    },
    present: {
      love: {
        upright: 'Everything you believed about love is being shattered. The collapse feels chaotic, but it\'s clearing space for truth.',
        reversed: 'You\'re clinging to a crumbling structure. The tower wants to fall—let it.',
      },
      career: {
        upright: 'Massive, chaotic shifts are happening at work. Don\'t try to save a burning building—get out and rebuild.',
        reversed: 'You\'re desperately trying to hold up walls that need to fall. This is delaying, not preventing, the collapse.',
      },
      life: {
        upright: 'Everything is falling apart—and that\'s exactly what needs to happen. Destruction precedes creation.',
        reversed: 'You\'re resisting a necessary breakdown. The longer you fight it, the more rubble you\'ll have to clear.',
      },
      ex: {
        upright: 'Your old life with them is being demolished. It hurts like hell, but the universe is clearing rotten foundations so you can build something real. The destruction is the gift.',
        reversed: 'You\'re trying to rebuild in the ruins while the tower is still falling. Stop. Let it finish collapsing. You can\'t construct anything stable on shaking ground.',
      },
    },
    future: {
      love: {
        upright: 'A lightning bolt of truth will change everything about how you see love. Painful, but liberating.',
        reversed: 'Avoiding the inevitable collapse will only make it worse when it finally comes.',
      },
      career: {
        upright: 'A breakthrough will come after a total collapse. The destruction makes room for something better.',
        reversed: 'Trying to prevent the tower from falling will exhaust you. Sometimes you need to let things burn.',
      },
      life: {
        upright: 'A fresh start on a stronger foundation awaits—but only after the old structure is completely demolished.',
        reversed: 'The tower will fall eventually. The question is whether you\'ll jump before or be buried in the rubble.',
      },
      ex: {
        upright: 'You will rebuild from the ground up. What rises from these ashes will be so much stronger than the house of cards you shared with your ex.',
        reversed: 'If you don\'t let this relationship fully collapse, you\'ll keep living in the wreckage. Demolish it completely so you can finally build something new.',
      },
    },
  },
  {
    id: 17,
    name: 'The Star',
    arcana: 'Major',
    vibe: 'The Cosmic Hope',
    description: 'Healing, inspiration, and renewal.',
    url: '/assets/img/cards/star.jpg',
    past: {
      love: {
        upright: 'A past love inspired hope and healing. That connection showed you what\'s possible when hearts align.',
        reversed: 'You lost hope in love. A past disappointment made you cynical or caused you to give up on finding "the one."',
      },
      career: {
        upright: 'A period of creative inspiration and optimism shaped your professional path. You followed your star.',
        reversed: 'You lost faith in your professional dreams. Disappointment or burnout dimmed your career vision.',
      },
      life: {
        upright: 'You followed a guiding star—a dream, a goal, a vision—that gave your life meaning and direction.',
        reversed: 'You lost hope or became disillusioned. A period of darkness made it hard to see the light ahead.',
      },
      ex: {
        upright: 'That relationship gave you hope—maybe even showed you what love could be. It was dreamy, healing, and for a while, it felt like the stars aligned.',
        reversed: 'Your ex broke your hope. They took something bright and optimistic in you and dimmed it. The disappointment left you wondering if love is even real.',
      },
    },
    present: {
      love: {
        upright: 'Hope is returning to your love life. Trust that you will find what you\'re looking for—it\'s looking for you too.',
        reversed: 'You\'ve lost hope in love. Cynicism or past pain is blocking you from seeing the possibilities.',
      },
      career: {
        upright: 'Follow your vision with optimism. Your dreams are valid, and the path is becoming clearer.',
        reversed: 'You\'ve lost faith in your professional direction. Discouragement is dimming your natural light.',
      },
      life: {
        upright: 'Spiritual renewal and inner healing are happening. The darkest part is over—keep moving toward the light.',
        reversed: 'You\'re struggling to find hope. The light feels distant, but it\'s there—you just can\'t see it yet.',
      },
      ex: {
        upright: 'You\'re healing. Slowly, gently, the wounds are closing. Hope is returning, and with it, the belief that you will love again—and be loved better.',
        reversed: 'Your ex took your hope when they left. You\'re in the dark, struggling to believe that anything good can come from this pain. But the star is still there—you just can\'t see it through the clouds yet.',
      },
    },
    future: {
      love: {
        upright: 'A beautiful, peaceful love is coming. Someone who feels like a breath of fresh air after a long storm.',
        reversed: 'Hope will return, but only if you let it. Stop building walls against the possibility of love.',
      },
      career: {
        upright: 'Success through authenticity and vision awaits. Your unique gifts will be recognized and rewarded.',
        reversed: 'Don\'t let cynicism sabotage your professional dreams. Renewed hope is possible.',
      },
      life: {
        upright: 'Wishes are coming true. Total clarity and renewed faith in life\'s goodness are on the horizon.',
        reversed: 'You\'ll find hope again, but you need to actively reach for it. Don\'t wait for the universe to convince you.',
      },
      ex: {
        upright: 'Peace is coming. Not just about them, but about love itself. You will reach a place where the thought of your ex doesn\'t hurt—it just is. And new hope will bloom.',
        reversed: 'Your hope for love didn\'t die with this relationship—it\'s just sleeping. Wake it up before cynicism becomes your permanent home.',
      },
    },
  },
  {
    id: 18,
    name: 'The Moon',
    arcana: 'Major',
    vibe: 'The Dreamscape',
    description: 'Illusion, intuition, and the subconscious.',
    url: '/assets/img/cards/moon.jpg',
    past: {
      love: {
        upright: 'A past relationship was shrouded in mystery or confusion. Things weren\'t always what they seemed.',
        reversed: 'Illusions were shattered in a past love. The truth eventually came out, even if it hurt.',
      },
      career: {
        upright: 'You worked in uncertainty—feeling in the dark about what was really going on around you.',
        reversed: 'Deception or confusion at work was eventually revealed. The fog lifted, for better or worse.',
      },
      life: {
        upright: 'A period of anxiety, vivid dreams, or confusion marked your past. Reality and illusion blurred.',
        reversed: 'You emerged from a confusing period with hard-won clarity. The shadows receded.',
      },
      ex: {
        upright: 'That relationship was full of confusion, half-truths, or things hidden in shadow. You never had the full picture. Maybe they were hiding something. Maybe you were hiding from something.',
        reversed: 'The truth about that relationship eventually came out—and it wasn\'t pretty. The illusions you clung to finally dissolved, revealing reality you might not have wanted to see.',
      },
    },
    present: {
      love: {
        upright: 'Trust your intuition, but watch for illusions. Not everything in your love life is what it appears to be.',
        reversed: 'Confusion in love is clearing. The truth is becoming visible—prepare to see it.',
      },
      career: {
        upright: 'Trust your instincts over surface appearances at work. Something may be hidden from you.',
        reversed: 'Workplace deception or confusion is being exposed. Clarity is coming.',
      },
      life: {
        upright: 'You\'re navigating the unknown. Don\'t fear the darkness—your intuition will guide you through.',
        reversed: 'The fog is lifting. What was confusing is becoming clear. Trust the process.',
      },
      ex: {
        upright: 'You don\'t have the full story about your ex or why things ended. There are shadows, secrets, things you sense but can\'t prove. Trust your gut—it\'s picking up on real signals, even if you can\'t see them clearly yet.',
        reversed: 'The illusions you had about your ex are starting to crack. The idealized version you held in your mind is giving way to the real, flawed person they actually were. This hurts, but it\'s also freedom.',
      },
    },
    future: {
      love: {
        upright: 'Secrets will come to light in your love life. The truth—whatever it is—will eventually be revealed.',
        reversed: 'The confusion will lift. You\'ll finally see a romantic situation clearly.',
      },
      career: {
        upright: 'A creative or subconscious breakthrough is coming. Trust the insights that come from dreams or intuition.',
        reversed: 'Workplace deception will be exposed. Clarity is coming to a murky situation.',
      },
      life: {
        upright: 'Truth will emerge from the chaos. Your intuition is guiding you toward clarity—keep following it.',
        reversed: 'The fog will clear, but you must be ready to accept what you see. The truth isn\'t always comfortable.',
      },
      ex: {
        upright: 'Eventually, you\'ll understand why it really ended. The full story will emerge, and whether it confirms your fears or reveals something unexpected, at least you\'ll finally know.',
        reversed: 'The illusions about your ex will completely dissolve. You\'ll see them clearly—not as a monster, not as an angel, but as a flawed human who wasn\'t right for you. The moon will set, and the sun will rise.',
      },
    },
  },
  {
    id: 19,
    name: 'The Sun',
    arcana: 'Major',
    vibe: 'The Great Radiance',
    description: 'Success, joy, and vitality.',
    url: '/assets/img/cards/sun.jpg',
    past: {
      love: {
        upright: 'A period of pure, radiant love. You experienced joy, warmth, and happiness in a past relationship.',
        reversed: 'A relationship that should have been happy was clouded by ego or temporary setbacks.',
      },
      career: {
        upright: 'A time of major, visible achievement. You shone brightly in your professional life.',
        reversed: 'Success was delayed or diminished by self-doubt or external circumstances.',
      },
      life: {
        upright: 'A period of vitality, health, and pure happiness. Life felt golden and full of possibility.',
        reversed: 'A time that should have been joyful was dampened by pessimism or obstacles.',
      },
      ex: {
        upright: 'When it was good, it was really good. There was warmth, joy, public happiness—everyone saw how good you looked together. That golden period was real, even if it couldn\'t last.',
        reversed: 'The happiness you showed the world wasn\'t the full story. Behind the sunny photos, something was off. The light wasn\'t as bright as you pretended it was.',
      },
    },
    present: {
      love: {
        upright: 'Radiant, joyful love is present. Everything feels bright, warm, and full of possibility.',
        reversed: 'The happiness feels blocked or delayed. Something is dimming your relationship\'s light.',
      },
      career: {
        upright: 'You\'re shining in your field. Success, recognition, and vitality surround your professional life.',
        reversed: 'Success is within reach but something is holding you back. Clear the clouds.',
      },
      life: {
        upright: 'Total success and happiness in all areas. The sun is shining on you—soak it in.',
        reversed: 'Happiness is close but not quite here. Inner negativity or external blocks are dimming your light.',
      },
      ex: {
        upright: 'Clarity is here. The fog has lifted, and you can see the relationship—and the breakup—for what it truly was. No more secrets, no more confusion. Just clear, warm light.',
        reversed: 'You\'re struggling to find the joy after this breakup. The sun is there—you\'re just still looking at the ground. Lift your head.',
      },
    },
    future: {
      love: {
        upright: 'A joyful, radiant love is coming. Marriage, children, or a partnership that feels like pure sunshine awaits.',
        reversed: 'Happiness in love is possible but may be delayed. Work on your inner light first.',
      },
      career: {
        upright: 'Massive success and public recognition are on the horizon. Your moment to shine is approaching.',
        reversed: 'Career success is coming, but self-doubt or obstacles may delay your moment in the sun.',
      },
      life: {
        upright: 'Abundance, happiness, and clear light await you. Everything is about to come together beautifully.',
        reversed: 'Joy is possible but you must actively choose optimism. Don\'t let past pain block future light.',
      },
      ex: {
        upright: 'You will be happy again—genuinely, radiantly happy. Not despite the breakup, but because of what you learned from it. The sun is rising on a better chapter.',
        reversed: 'Happiness after your ex requires you to stop living in their shadow. The sun can\'t warm you if you keep choosing darkness. Step into the light.',
      },
    },
  },
  {
    id: 20,
    name: 'Judgement',
    arcana: 'Major',
    vibe: 'The Final Awakening',
    description: 'Reflection, reckoning, and an inner calling.',
    url: '/assets/img/cards/judgement.jpg',
    past: {
      love: {
        upright: 'A defining moment of truth or reckoning occurred in a past relationship. The trumpet sounded, and a choice was made.',
        reversed: 'You avoided a necessary reckoning in love. Self-doubt or denial prevented you from answering the call.',
      },
      career: {
        upright: 'A significant professional judgment—being hired, evaluated, or called to account—shaped your path.',
        reversed: 'You ignored a professional calling or failed to learn from a past career lesson.',
      },
      life: {
        upright: 'A life-changing realization or awakening transformed who you were. You answered the call.',
        reversed: 'You missed or ignored a wake-up call. Self-criticism or denial kept you from rising.',
      },
      ex: {
        upright: 'There was a moment when the universe called you to decide—stay or go, fight or surrender. That reckoning shaped everything that came after.',
        reversed: 'You ignored the warning signs, the wake-up calls, the moments when the truth was right in front of you. The reckoning you avoided then is the lesson you\'re learning now.',
      },
    },
    present: {
      love: {
        upright: 'You\'re hearing a calling about your love life. A moment of truth and transformation is at hand.',
        reversed: 'You\'re avoiding a necessary reckoning in love. Self-doubt or fear is keeping you from answering.',
      },
      career: {
        upright: 'A professional reckoning is happening. Reflect on your choices and prepare to be evaluated or to make a major decision.',
        reversed: 'You\'re ignoring your true calling at work. Self-criticism is blocking your professional rebirth.',
      },
      life: {
        upright: 'The trumpet is sounding. You\'re being called to a higher purpose, a spiritual rebirth, an awakening.',
        reversed: 'You\'re ignoring the call to rise. Fear, self-doubt, or denial is keeping you in the grave when you should be rising.',
      },
      ex: {
        upright: 'You\'re in the reckoning phase—evaluating everything that happened, taking inventory of the lessons, judging what was real and what was illusion. This assessment is necessary before you can truly move on.',
        reversed: 'You\'re either being too hard on yourself or refusing to take any responsibility. Neither is true judgment. Stop the self-flagellation, but also stop the blame game. Find the honest middle.',
      },
    },
    future: {
      love: {
        upright: 'A major transformation in your love life is coming. The rebirth will be worth the reckoning.',
        reversed: 'If you keep avoiding self-reflection, you\'ll miss the call to rise into better love.',
      },
      career: {
        upright: 'Your true calling or vocation will become clear. A professional rebirth awaits those who answer.',
        reversed: 'Ignoring your inner calling will lead to professional stagnation. Listen to what your soul is telling you.',
      },
      life: {
        upright: 'A total spiritual rebirth is approaching. You will rise from the ashes of your old self.',
        reversed: 'The awakening requires participation. Stop hitting snooze on your own evolution.',
      },
      ex: {
        upright: 'Final closure is coming. Not through them, but through your own inner reckoning. You\'ll understand exactly what that relationship taught you, and you\'ll rise from it transformed.',
        reversed: 'If you don\'t honestly assess what happened—your role, their role, the lessons—you\'ll carry this baggage into every future relationship. Do the reckoning now.',
      },
    },
  },
  {
    id: 21,
    name: 'The World',
    arcana: 'Major',
    vibe: 'The Cosmic Dance',
    description: 'Completion, travel, and integration.',
    url: '/assets/img/cards/world.jpg',
    past: {
      love: {
        upright: 'A relationship reached its fullest expression. You experienced completion, fulfillment, and the sense that a cycle was whole.',
        reversed: 'A past relationship ended without proper closure. Something feels unfinished, incomplete.',
      },
      career: {
        upright: 'You achieved a major professional milestone. A chapter closed with a sense of accomplishment and completion.',
        reversed: 'A project or role ended without resolution. You moved on but the lack of closure lingers.',
      },
      life: {
        upright: 'You completed a major life cycle—travel, graduation, achievement. You felt whole and integrated.',
        reversed: 'A life chapter closed without full resolution. Part of you is still stuck in what was.',
      },
      ex: {
        upright: 'At one point, that relationship felt complete. You traveled together, achieved together, created a world together. It was whole—until it wasn\'t.',
        reversed: 'You never got closure. The relationship ended, but something in you didn\'t get the memo. You\'re stuck because the ending didn\'t feel like an ending.',
      },
    },
    present: {
      love: {
        upright: 'You are whole, with or without a partner. Your relationship (or your single life) feels complete and integrated.',
        reversed: 'You feel incomplete without someone. The search for wholeness through another is blocking your own.',
      },
      career: {
        upright: 'You\'ve reached a professional peak. Celebrate the completion before the next cycle begins.',
        reversed: 'You feel like something is missing professionally. Stop reaching for more and appreciate what you\'ve achieved.',
      },
      life: {
        upright: 'Integration and harmony. You\'ve mastered this chapter of life. The world is dancing with you.',
        reversed: 'You feel incomplete despite achievements. The missing piece is self-acceptance, not external success.',
      },
      ex: {
        upright: 'You are complete without them. Read that again. You don\'t need them to come back for your life to be whole. You are already enough.',
        reversed: 'You\'re feeling incomplete because they\'re gone—as if they took a piece of you with them. They didn\'t. You just haven\'t found that piece inside yourself yet.',
      },
    },
    future: {
      love: {
        upright: 'A love that feels complete and expansive is coming. Full circle—the end of one cycle and the beginning of another.',
        reversed: 'Completion in love requires closing past chapters first. Tie up loose ends before moving forward.',
      },
      career: {
        upright: 'Global success and ultimate achievement await. Your professional journey reaches its peak.',
        reversed: 'Don\'t let distractions keep you from the finish line. Completion requires focus.',
      },
      life: {
        upright: 'Everything comes together. Travel, achievement, integration—the world opens up and welcomes you home.',
        reversed: 'You\'re falling short of completion because you\'re distracted by unfinished business. Close the old chapters.',
      },
      ex: {
        upright: 'Total closure is coming. Not the kind where they apologize and you forgive—the kind where you simply don\'t need anything from them anymore. The world moves on, and so do you.',
        reversed: 'You won\'t feel complete until you stop letting your ex\'s absence define your life. The world is waiting for you—but you have to stop looking backward to dance forward.',
      },
    },
  },
  // Cups (22-35)
  {
    id: 22,
    name: 'Ace of Cups',
    arcana: 'Minor',
    vibe: 'The Holy Grail',
    description: 'Overflowing love, new emotional beginnings, compassion, and spiritual awakening.',
    url: '/assets/img/cards/Cups01.jpg',
    past: {
      love: {
        upright: 'You experienced a pure, overwhelming rush of new love. Your heart opened completely to someone, and that vulnerability was beautiful—even if it didn\'t last.',
        reversed: 'Emotional walls blocked love from fully entering your life. You may have pushed away genuine connection because you weren\'t ready to receive it.',
      },
      career: {
        upright: 'You found work that fed your soul, not just your bank account. A creative or healing calling shaped your professional path.',
        reversed: 'You poured yourself into work that gave nothing back emotionally. Burnout and disconnection from your true purpose marked this period.',
      },
      life: {
        upright: 'A time of deep compassion, spiritual insight, and emotional abundance. You were connected to something greater than yourself.',
        reversed: 'You ignored your intuition and emotional needs. Pouring from an empty cup left you depleted and disconnected.',
      },
      ex: {
        upright: 'When you met them, it felt like your heart cracked open for the first time. That rush of emotion was real—the purest form of love you knew how to give. Don\'t let the ending taint the beauty of that beginning.',
        reversed: 'You offered your whole heart, but they couldn\'t receive it. Or maybe you were so blocked by past pain that you never fully let them in. Either way, the cup never filled the way it was supposed to.',
      },
    },
    present: {
      love: {
        upright: 'Your heart is opening to new emotional possibilities. Love is being offered—be willing to receive it without overthinking.',
        reversed: 'You\'re feeling emotionally drained or blocked. Someone may be offering love, but you\'re too depleted to accept it.',
      },
      career: {
        upright: 'Creative inspiration and emotional fulfillment are flowing into your work. A heart-centered opportunity is presenting itself.',
        reversed: 'You\'ve lost the emotional connection to your work. Going through the motions without passion is unsustainable.',
      },
      life: {
        upright: 'Spiritual awakening and emotional renewal surround you. The universe is pouring love into your cup—receive it.',
        reversed: 'Self-love deficits are blocking abundance. You can\'t receive what you don\'t believe you deserve.',
      },
      ex: {
        upright: 'Something is shifting in your heart. The grief is softening, and you\'re starting to believe you can love again. This isn\'t betraying what you had—it\'s honoring your capacity to heal.',
        reversed: 'You\'re running on empty. They took so much from you that you don\'t know how to fill your own cup anymore. Stop waiting for them to replenish what they drained. That\'s your job now.',
      },
    },
    future: {
      love: {
        upright: 'A genuine, deep emotional connection is approaching. New love or a profound renewal of existing love awaits you.',
        reversed: 'Love will be offered, but you might miss it if you\'re still looking backward. Open your eyes to what\'s coming, not what\'s gone.',
      },
      career: {
        upright: 'Work that aligns with your emotional and spiritual values is coming. Trust the pull toward heart-centered opportunities.',
        reversed: 'New opportunities will require emotional availability. Make sure you\'re not too closed off to recognize them.',
      },
      life: {
        upright: 'Emotional healing and spiritual insight are on the horizon. A new chapter of abundance and compassion awaits.',
        reversed: 'The cup will be offered, but if your hands are full of old pain, you won\'t be able to hold it. Let go first.',
      },
      ex: {
        upright: 'Love is coming—real love, not the ghost of what you lost. Someone will offer you their heart, and this time, it won\'t feel like a transaction. It will feel like home.',
        reversed: 'You\'re so fixated on them that you\'ll miss the person standing right in front of you. The universe doesn\'t owe you a reunion—but it is offering you a new beginning if you\'ll take it.',
      },
    },
  },
  {
    id: 23,
    name: 'Two of Cups',
    arcana: 'Minor',
    vibe: 'The Soul Contract',
    description: 'Partnership, unity, mutual attraction, emotional harmony, and balanced connection.',
    url: '/assets/img/cards/Cups02.jpg',
    past: {
      love: {
        upright: 'You found a true mirror in someone—a partnership that felt destined. There was mutual respect, shared vulnerability, and genuine emotional exchange.',
        reversed: 'The connection was imbalanced from the start. One person gave while the other took. What looked like partnership was really just you carrying the weight.',
      },
      career: {
        upright: 'A business partnership or collaboration built on trust and mutual benefit flourished. Two minds worked better than one.',
        reversed: 'A professional partnership failed due to miscommunication or unequal contribution. Someone didn\'t hold up their end.',
      },
      life: {
        upright: 'You achieved harmony between your inner world and outer relationships. Balance felt natural and sustainable.',
        reversed: 'You lost yourself in trying to connect with others. Your own cup emptied while you tried to fill someone else\'s.',
      },
      ex: {
        upright: 'You genuinely believed you found your person. The connection was real—both of you felt it. That mutual recognition wasn\'t a lie, even if the relationship couldn\'t survive.',
        reversed: 'Be honest: were you ever really equals? Or were you always the one compromising, adjusting, giving more? The mirror was cracked from the start—you just didn\'t want to see your own reflection clearly.',
      },
    },
    present: {
      love: {
        upright: 'A balanced, harmonious connection is either forming or deepening. There\'s mutual respect and emotional reciprocity here.',
        reversed: 'Something is off-balance. One person is overinvesting while the other withdraws. This isn\'t partnership—it\'s imbalance.',
      },
      career: {
        upright: 'A collaboration is flowing beautifully. Trust the partnership and allow mutual respect to guide decisions.',
        reversed: 'A work relationship is becoming one-sided. Address the imbalance before resentment builds.',
      },
      life: {
        upright: 'You\'re in harmony with yourself and those around you. Relationships feel reciprocal and nourishing.',
        reversed: 'Inner conflict is affecting your connections. You can\'t pour into others when you\'re at war with yourself.',
      },
      ex: {
        upright: 'There\'s still an energetic connection between you two. Maybe you\'re both thinking of each other, maybe considering reconciliation. The question isn\'t whether the bond exists—it\'s whether it can ever be equal.',
        reversed: 'Stop pretending there was balance. You gave everything; they gave the minimum to keep you hooked. The "connection" you\'re mourning was mostly your own love reflected back at you.',
      },
    },
    future: {
      love: {
        upright: 'A true partnership is coming—one built on mutual respect, shared values, and emotional equality. This is the real deal.',
        reversed: 'Before committing to anyone new, make sure both cups are being filled equally. You\'ve been burned by imbalance before.',
      },
      career: {
        upright: 'A beneficial partnership or collaboration is approaching. Trust will be the foundation of shared success.',
        reversed: 'Scrutinize any new partnership carefully. Make sure expectations and contributions are clearly defined.',
      },
      life: {
        upright: 'Harmony and deep connection are approaching. You\'re moving toward relationships that truly nourish you.',
        reversed: 'Balanced partnership requires you to be whole first. Fill your own cup before trying to merge with another.',
      },
      ex: {
        upright: 'If reconciliation happens, it will require a complete restructuring of how you both showed up. You\'ll need to be two full cups meeting as equals, not one full cup desperately trying to fill an empty one.',
        reversed: 'The pattern will repeat with someone new unless you learn to recognize imbalance early. Your future love needs you to demand reciprocity—not settle for crumbs because you\'re afraid to be alone.',
      },
    },
  },
  {
    id: 24,
    name: 'Three of Cups',
    arcana: 'Minor',
    vibe: 'The Joyful Circle',
    description: 'Celebration, friendship, community, shared joy, and social connection.',
    url: '/assets/img/cards/Cups03.jpg',
    past: {
      love: {
        upright: 'Your relationship was surrounded by joy and celebration. Friends approved, gatherings were fun, and love felt like a party.',
        reversed: 'A third party interfered with your relationship—whether through cheating, toxic friendships, or social pressure that pulled you apart.',
      },
      career: {
        upright: 'You experienced genuine team success. Collaborative projects flourished, and milestones were celebrated together.',
        reversed: 'Workplace cliques, gossip, or exclusion poisoned the environment. Politics ruined what should have been collaborative.',
      },
      life: {
        upright: 'You were surrounded by your soul tribe. Friendships were deep, celebrations were meaningful, and belonging felt natural.',
        reversed: 'You used partying and socializing to avoid dealing with real emotions. Or you felt isolated despite being surrounded by people.',
      },
      ex: {
        upright: 'The social side of your relationship was beautiful—dinner parties, friend groups, celebrations that made you feel like a team. You weren\'t just a couple; you were a "we."',
        reversed: 'Let\'s talk about the elephant in the room: was there someone else? Even if not physically, emotionally there was interference. Friends who enabled bad behavior, exes who never really left, or a social life that took priority over the relationship.',
      },
    },
    present: {
      love: {
        upright: 'Community and friendship are healing your heart. Sometimes the best medicine is laughter with people who genuinely care about you.',
        reversed: 'Gossip, jealousy, or unhealthy social dynamics are affecting your love life. Some "friends" are not acting in your best interest.',
      },
      career: {
        upright: 'Team collaboration is at its peak. Celebrate wins together and nurture workplace friendships.',
        reversed: 'Office politics or social drama is making work miserable. Not everyone is on your team.',
      },
      life: {
        upright: 'Lean into your friendships. Joy and healing come through genuine community right now.',
        reversed: 'You\'re either feeling isolated or drowning your sorrows in unhealthy social habits. Neither extreme serves you.',
      },
      ex: {
        upright: 'Your friends are your lifeline right now. Stop isolating. The people who love you can\'t help if you keep them at arm\'s length. Let them celebrate your survival with you.',
        reversed: 'Be careful who you\'re venting to. Some of your "friends" are enjoying your pain a little too much. And if you\'re using alcohol, partying, or rebounds to avoid the grief—stop. Numbing isn\'t healing.',
      },
    },
    future: {
      love: {
        upright: 'Healing will come through community. New love might arrive through social connections, or existing love will deepen through shared friendships.',
        reversed: 'Watch for third-party interference in future relationships. Set boundaries around friendships that could threaten romantic stability.',
      },
      career: {
        upright: 'Team success and celebration are coming. Your collaborative efforts will pay off in ways worth toasting.',
        reversed: 'Stay alert for workplace gossip or exclusionary dynamics. Protect your professional reputation.',
      },
      life: {
        upright: 'Your tribe is gathering. Joy, celebration, and deep friendship await you.',
        reversed: 'Quality over quantity in friendships. Some social circles will need pruning to make room for genuine connection.',
      },
      ex: {
        upright: 'You will laugh again. Not the forced kind—the real, belly-aching kind that reminds you life has more to offer than grieving someone who couldn\'t stay. Your people will help you remember who you are without them.',
        reversed: 'If you keep surrounding yourself with people who romanticize your ex or enable your obsession, you\'ll stay stuck. Choose friends who want you to move forward, not ones who keep the wound open for entertainment.',
      },
    },
  },
  {
    id: 25,
    name: 'Four of Cups',
    arcana: 'Minor',
    vibe: 'The Divine Boredom',
    description: 'Contemplation, apathy, reevaluation, discontent, and missed opportunities.',
    url: '/assets/img/cards/Cups04.jpg',
    past: {
      love: {
        upright: 'You took love for granted. While you were bored or distracted, something precious slipped away unappreciated.',
        reversed: 'You finally recognized value in what you almost lost. A wake-up call shifted your perspective on love.',
      },
      career: {
        upright: 'Stagnation and lack of motivation defined your work life. You were uninspired and just going through the motions.',
        reversed: 'You emerged from professional apathy and re-engaged with your career with fresh perspective.',
      },
      life: {
        upright: 'The universe offered you a gift and you were too withdrawn or distracted to see it. Opportunity passed.',
        reversed: 'After a period of introspection, you emerged ready to engage with life again.',
      },
      ex: {
        upright: 'Were you really present in that relationship? Or were you so focused on what was missing that you couldn\'t see what they were offering? Sometimes we mourn things we never fully appreciated.',
        reversed: 'The end of the relationship finally woke you up to what you had. Unfortunately, clarity often comes too late. The question is whether you\'ll repeat this pattern.',
      },
    },
    present: {
      love: {
        upright: 'You\'re emotionally withdrawn and possibly taking current or potential love for granted. Something is being offered that you\'re ignoring.',
        reversed: 'The fog is lifting. You\'re starting to see romantic possibilities you were blind to before.',
      },
      career: {
        upright: 'You\'re feeling disconnected and unfulfilled at work. Boredom and apathy are making you miss opportunities right in front of you.',
        reversed: 'Motivation is returning. A new perspective is helping you re-engage with professional possibilities.',
      },
      life: {
        upright: 'You\'re so focused on what\'s lacking that you can\'t see the blessings being offered. Look up from your navel-gazing.',
        reversed: 'You\'re emerging from withdrawal with renewed interest in what life has to offer.',
      },
      ex: {
        upright: 'Are you mourning them or mourning the idea of them? Be honest: were you even fully present when they were there? Sometimes we grieve most intensely for what we never bothered to appreciate.',
        reversed: 'Something is shifting. You\'re starting to see beyond your grief to what\'s actually available to you now. Don\'t waste this clarity by sliding back into obsession.',
      },
    },
    future: {
      love: {
        upright: 'You will finally see the love that\'s been offered all along. The fog of discontent will lift.',
        reversed: 'Apathy could cause you to miss genuine romantic opportunity. Wake up before it\'s gone.',
      },
      career: {
        upright: 'A new opportunity will break through your professional malaise. Be ready to actually see it.',
        reversed: 'Engage with opportunities before they\'re withdrawn. Your disinterest has an expiration date.',
      },
      life: {
        upright: 'The cup being offered will become visible to you. All you need to do is reach for it.',
        reversed: 'If you stay locked in contemplation, life will move on without you. Participate.',
      },
      ex: {
        upright: 'You\'ll eventually realize you were so busy mourning what you lost that you almost missed what was coming next. Life is offering you something new—accept it.',
        reversed: 'If you keep romanticizing the past and ignoring the present, you\'ll look back on this time and realize you wasted your healing period feeling sorry for yourself. Something real is trying to reach you.',
      },
    },
  },
  {
    id: 26,
    name: 'Five of Cups',
    arcana: 'Minor',
    vibe: 'The Alchemist of Grief',
    description: 'Loss, grief, disappointment, regret, and focusing on what\'s been lost.',
    url: '/assets/img/cards/Cups05.jpg',
    past: {
      love: {
        upright: 'You were consumed by what went wrong. The "what ifs" and regrets dominated your thoughts while love that remained went unnoticed.',
        reversed: 'You moved through grief and found forgiveness—for yourself, for them. The healing allowed you to love again.',
      },
      career: {
        upright: 'A professional failure or loss consumed your focus. You couldn\'t see what remained intact because you were staring at what spilled.',
        reversed: 'You recovered from a setback and realized your skills and value survived the loss. The failure became a teacher.',
      },
      life: {
        upright: 'You lived in the ruins of what was, mourning so deeply you couldn\'t see the bridge to tomorrow still standing behind you.',
        reversed: 'You finally turned around and crossed the bridge to a new chapter. Grief became wisdom.',
      },
      ex: {
        upright: 'You spent so long staring at those three spilled cups that you forgot about the two still standing. The obsession with what went wrong kept you from seeing what could go right.',
        reversed: 'At some point, you chose to stop drowning. You decided the tears had done their work and it was time to rebuild. That moment changed everything.',
      },
    },
    present: {
      love: {
        upright: 'You\'re deep in grief, only seeing what you\'ve lost. It\'s valid to mourn, but you\'re missing the love that still exists around you.',
        reversed: 'Acceptance is beginning. The sharp edge of loss is softening, and you\'re starting to notice what remains.',
      },
      career: {
        upright: 'A professional disappointment has you focused on failure. You\'re missing opportunities because you can\'t stop looking at what fell.',
        reversed: 'Recovery is happening. You\'re learning from the loss and starting to see possibility again.',
      },
      life: {
        upright: 'Grief is real and you\'re allowed to feel it. But living in the ruins won\'t rebuild your life. There are still cups standing.',
        reversed: 'The tide is turning. You\'re finding the two cups that didn\'t spill. This is the beginning of resurrection.',
      },
      ex: {
        upright: 'You\'re mourning so hard you\'ve made grief your entire identity. Yes, three cups spilled. Yes, it hurts. But you\'re letting the pain become a prison. There are two cups still standing behind you—people who love you, parts of yourself that survived.',
        reversed: 'The worst of the grief is passing. You\'re starting to remember that your whole life isn\'t ruined—just one chapter ended. That\'s not the same thing, and deep down you know it.',
      },
    },
    future: {
      love: {
        upright: 'You will turn around and see what remains. The mourning period will end, and love—new or existing—will become visible again.',
        reversed: 'If you cling to grief too long, you\'ll miss what\'s waiting. The bridge is there. Cross it.',
      },
      career: {
        upright: 'Recovery from professional loss is coming. You\'ll finally see the skills, connections, and opportunities that survived the setback.',
        reversed: 'Release the regret or it becomes a permanent anchor. What you lost doesn\'t have to define what comes next.',
      },
      life: {
        upright: 'The mourning period will conclude. You\'ll notice the bridge, cross it, and find something worth living for on the other side.',
        reversed: 'The scars will remain, but they\'ll become wisdom instead of wounds. You\'ll carry the lessons without the open bleeding.',
      },
      ex: {
        upright: 'One day—sooner than you think—you\'ll wake up and realize you went an entire day without thinking of them. Then two days. Then a week. The grief doesn\'t disappear; it just stops running your life.',
        reversed: 'You have a choice: make this loss your origin story or your death sentence. The universe is offering you a new chapter, but you have to put down the old book to read it.',
      },
    },
  },
  {
    id: 27,
    name: 'Six of Cups',
    arcana: 'Minor',
    vibe: 'The Inner Child',
    description: 'Nostalgia, innocence, childhood memories, reunions, and emotional roots.',
    url: '/assets/img/cards/Cups06.jpg',
    past: {
      love: {
        upright: 'A connection rooted in deep history—perhaps a childhood sweetheart or someone who felt like home from the first moment. The bond had an ancient quality.',
        reversed: 'You were trapped by idealized memories of someone who never actually existed. Nostalgia distorted reality.',
      },
      career: {
        upright: 'You found success by returning to an old passion or reconnecting with people from your professional past.',
        reversed: 'Clinging to "how we\'ve always done it" held back necessary evolution. Nostalgia blocked growth.',
      },
      life: {
        upright: 'Simple pleasures and innocent joy marked this time. You healed by reconnecting with your inner child.',
        reversed: 'You were stuck in "the good old days," unable to mature because the past felt safer than the present.',
      },
      ex: {
        upright: 'This connection felt karmic, like you\'d known them before. There was a childlike innocence to how you loved each other, a sense of coming home.',
        reversed: 'You\'ve been in love with a memory, not a person. The version of them you\'re grieving never fully existed—it\'s a highlight reel you\'ve edited to exclude everything painful.',
      },
    },
    present: {
      love: {
        upright: 'Nostalgia is coloring your romantic life. You may be reconnecting with the past or seeking comfort in familiar emotional patterns.',
        reversed: 'Living in memories is keeping you from present love. The past has become a comfortable prison.',
      },
      career: {
        upright: 'An old connection or past skill is becoming relevant again. Sometimes looking back helps you move forward.',
        reversed: 'Romanticizing how things "used to be" is blocking necessary innovation. Adapt or stagnate.',
      },
      life: {
        upright: 'Find healing through simple pleasures and childlike joy. Reconnect with innocence and play.',
        reversed: 'You\'re using nostalgia as an escape from adult reality. The past can\'t protect you from the present.',
      },
      ex: {
        upright: 'You\'re deep in the memory well—old photos, texts you saved, places you used to go together. Some nostalgia is healing. But be careful: memory is a liar that only shows you the good parts.',
        reversed: 'You\'re not mourning a real person. You\'re mourning a fantasy version you created by forgetting all the ways they hurt you. The person in your memories wouldn\'t have left you crying like this.',
      },
    },
    future: {
      love: {
        upright: 'Someone from your past may return, or you\'ll find new love that carries the comfort of familiarity. History offers a gift.',
        reversed: 'Don\'t mistake nostalgia for genuine connection. Feeling "familiar" isn\'t the same as feeling healthy.',
      },
      career: {
        upright: 'A past professional connection will resurface with beneficial timing. Old skills will become newly valuable.',
        reversed: 'Growth requires releasing attachment to how things were. The future won\'t wait for you to finish romanticizing the past.',
      },
      life: {
        upright: 'Reunions and sweet returns are coming. The past has a gift for you, offered with love.',
        reversed: 'Honor your history but don\'t set up camp there. The past is a place to visit, not to live.',
      },
      ex: {
        upright: 'There may be a reconnection—whether with them or with the feelings of safety you once associated with them. But reconciliation only works if the present version can match the memory\'s promise.',
        reversed: 'Stop waiting for them to return as the person you wish they were. If they come back at all, they\'ll be the same person who left. Are you willing to love the real them, not the edited version in your head?',
      },
    },
  },
  {
    id: 28,
    name: 'Seven of Cups',
    arcana: 'Minor',
    vibe: 'The Hall of Mirrors',
    description: 'Choices, illusions, fantasy, wishful thinking, and scattered desires.',
    url: '/assets/img/cards/Cups07.jpg',
    past: {
      love: {
        upright: 'Your relationship was built more on fantasy than reality. You loved the potential, not the person—and confused the two.',
        reversed: 'You finally cut through the illusion and saw the relationship for exactly what it was. Painful clarity replaced comfortable delusion.',
      },
      career: {
        upright: 'Shiny object syndrome derailed your focus. You chased every possibility instead of committing to one path.',
        reversed: 'The fog cleared and you finally chose a direction. Commitment replaced endless fantasizing.',
      },
      life: {
        upright: 'You were lost in a maze of options, some real and some illusions. Discernment was desperately needed.',
        reversed: 'Reality won over fantasy. You stopped dreaming about what could be and started building what actually was.',
      },
      ex: {
        upright: 'Be honest: were you in love with them or with who you wanted them to become? Half of what you\'re mourning was potential that never materialized—a fantasy of "us" that existed mostly in your head.',
        reversed: 'At some point, the spell broke. You saw them clearly—not the person you imagined them to be, but the person they actually were. That clarity hurt, but it was freedom.',
      },
    },
    present: {
      love: {
        upright: 'You\'re lost in fantasies—either romanticizing what\'s gone or imagining impossible futures. Too many options or daydreams are paralyzing real action.',
        reversed: 'The fog is lifting. You\'re starting to see romantic situations clearly instead of through the distortion of wishful thinking.',
      },
      career: {
        upright: 'Too many options are creating paralysis. Every path seems equally appealing and equally terrifying. Pick one—dreaming isn\'t doing.',
        reversed: 'Clarity is arriving. The right path is becoming obvious as the illusions fade.',
      },
      life: {
        upright: 'Not every cup contains what it promises. Some hold treasure, others hold snakes. Discernment is essential right now.',
        reversed: 'You\'re waking up from the daydream. Reality is coming into focus.',
      },
      ex: {
        upright: 'You\'re living in fantasies about them—imagining reconciliation scenes, rewriting history, dreaming of conversations that will never happen. This isn\'t hope; it\'s escapism. You\'re choosing illusion over the painful work of reality.',
        reversed: 'The fantasy version of them is finally dissolving. You\'re starting to see them as they actually were—imperfect, human, and ultimately not right for you. This clarity is brutal but necessary.',
      },
    },
    future: {
      love: {
        upright: 'The bubbles will burst and illusions will fade. You\'ll finally see clearly what\'s real versus what\'s wishful thinking—and you\'ll choose accordingly.',
        reversed: 'If you keep letting fantasy override reality, you\'ll miss genuine love while chasing mirages. Ground yourself.',
      },
      career: {
        upright: 'Clarity about your professional direction is coming. The illusions will fade, and the right choice will become obvious.',
        reversed: 'Stop waiting for a lightning bolt of clarity. Sometimes you have to commit before certainty arrives.',
      },
      life: {
        upright: 'The hall of mirrors will clear. You\'ll know what\'s real, and you\'ll finally be able to choose without confusion.',
        reversed: 'Endless daydreaming could keep you stuck in possibility without ever reaching reality. At some point, you have to pick a cup.',
      },
      ex: {
        upright: 'The fantasy of reunion will eventually become less seductive than the reality of moving on. One day, the imaginary version of them won\'t be enough anymore—and that\'s when you\'ll actually heal.',
        reversed: 'If you keep escaping into what-ifs and maybe-one-days, you\'ll waste years loving a ghost. The fantasy is comfortable. The fantasy is also a trap. Choose reality, even when it hurts.',
      },
    },
  },
  {
    id: 29,
    name: 'Eight of Cups',
    arcana: 'Minor',
    vibe: 'The Sacred Departure',
    description: 'Walking away, abandonment, seeking deeper meaning, and emotional detachment.',
    url: '/assets/img/cards/Cups08.jpg',
    past: {
      love: {
        upright: 'You walked away from love that looked fine on paper but couldn\'t fulfill your soul. The hardest departures are from things that weren\'t terrible—just not enough.',
        reversed: 'You returned to a situation you knew wasn\'t right because the unknown terrified you more than the known disappointment.',
      },
      career: {
        upright: 'You left a stable job that was slowly killing your spirit. The departure was terrifying but necessary.',
        reversed: 'Fear kept you in a dead-end role. The security felt safer than the uncertainty of something more meaningful.',
      },
      life: {
        upright: 'You embarked on a spiritual pilgrimage, seeking depth over comfort. You chose growth over familiar stagnation.',
        reversed: 'You stayed in the swamp of mediocrity because the mountain looked too hard to climb.',
      },
      ex: {
        upright: 'You left because you had to. Not because they were terrible—maybe they were actually okay—but because "okay" was slowly suffocating you. That walk was the bravest thing you\'ve ever done.',
        reversed: 'You knew you should have left sooner. Every time you almost walked away, fear dragged you back. The departure you eventually made was messier because you waited too long.',
      },
    },
    present: {
      love: {
        upright: 'You\'re emotionally walking away, even if your body is still present. Something deeper is calling you beyond what this situation can offer.',
        reversed: 'You know you should leave but you\'re paralyzed. The fear of being alone feels bigger than the pain of staying.',
      },
      career: {
        upright: 'You\'re ready to leave "good enough" behind in search of meaningful work. The cups you\'ve stacked aren\'t satisfying anymore.',
        reversed: 'Stagnation has become comfortable. You know this role doesn\'t serve you, but you can\'t seem to make the exit.',
      },
      life: {
        upright: 'You\'re seeking something more profound than what your current life provides. The arranged cups don\'t fulfill you anymore.',
        reversed: 'Your soul is urging departure, but fear keeps turning you back toward what you know.',
      },
      ex: {
        upright: 'Part of you is already gone—you left emotionally before the physical ending happened. Now you\'re completing the departure, walking toward something you can\'t yet see but know you need.',
        reversed: 'You\'re staying stuck because the idea of moving on feels like admitting it\'s really over. But you\'re not protecting the relationship—you\'re just delaying your own freedom.',
      },
    },
    future: {
      love: {
        upright: 'A spiritual journey awaits where you\'ll discover fulfillment no relationship could have provided. You\'re walking toward yourself.',
        reversed: 'Don\'t return to what you\'ve outgrown just because forward feels lonely. The path ahead is worth the solitude.',
      },
      career: {
        upright: 'A departure toward more meaningful work is coming. Trust that what you\'re walking toward is better than what you\'re leaving behind.',
        reversed: 'Make sure you\'re moving toward something, not just escaping. Running from isn\'t the same as walking toward.',
      },
      life: {
        upright: 'The sacred departure leads to higher ground. The mountain is steep, but the view from the top will justify every step.',
        reversed: 'If you keep avoiding the hard walk, you\'ll spend your life in a valley wondering what was beyond the horizon.',
      },
      ex: {
        upright: 'You will find something that makes walking away worth it. Not a replacement person—something bigger. A version of yourself that couldn\'t have existed while you stayed.',
        reversed: 'Every time you almost move on and then turn back, you lose ground. The future is waiting, but it won\'t wait forever. Stop looking over your shoulder.',
      },
    },
  },
  {
    id: 30,
    name: 'Nine of Cups',
    arcana: 'Minor',
    vibe: 'The Wish Card',
    description: 'Wishes fulfilled, contentment, satisfaction, emotional abundance, and self-satisfaction.',
    url: '/assets/img/cards/Cups09.jpg',
    past: {
      love: {
        upright: 'There was a time when you felt completely chosen, satisfied, and emotionally abundant in love. You had what others wished for.',
        reversed: 'The relationship looked perfect from the outside but felt hollow inside. All the right ingredients somehow made the wrong meal.',
      },
      career: {
        upright: 'You achieved professional satisfaction and enjoyed the rewards of your success. This was your peak performance era.',
        reversed: 'Success bred complacency. You rested on accomplishments instead of continuing to grow, and stagnation followed.',
      },
      life: {
        upright: 'Emotional abundance marked this period. You had everything you needed to be genuinely happy and content.',
        reversed: 'You had material abundance but spiritual emptiness. The excess didn\'t fill the void—it just distracted from it.',
      },
      ex: {
        upright: 'Remember when it was good? When you felt chosen and satisfied, when the relationship felt like a wish granted? That was real, even if it didn\'t last.',
        reversed: 'You played the part of the happy couple so well that even you believed it. But alone at night, you knew the contentment was performance. The Instagram didn\'t match the reality.',
      },
    },
    present: {
      love: {
        upright: 'You\'re becoming your own wish fulfillment. Self-satisfaction is growing, and that wholeness is deeply attractive.',
        reversed: 'Are you chasing what you actually want, or what you think you should want? Superficial desires won\'t lead to genuine contentment.',
      },
      career: {
        upright: 'You\'ve earned this moment of professional satisfaction. Allow yourself to enjoy the fruits of your labor.',
        reversed: 'Achievement without purpose feels empty. Smugness is blocking continued growth.',
      },
      life: {
        upright: 'Your cups are full. This is a moment of genuine emotional contentment—savor it without guilt.',
        reversed: 'You\'re confusing material comfort with spiritual fulfillment. The void can\'t be filled with stuff.',
      },
      ex: {
        upright: 'Here\'s something they probably don\'t want you to know: you\'re starting to be okay. Not because of anyone else—because of you. You\'re becoming the wish instead of waiting for one.',
        reversed: 'You\'re fixating on getting them back like it\'s some prize you\'re owed. But what exactly would you win? More of the same emptiness dressed up as love? Check what you\'re actually wishing for.',
      },
    },
    future: {
      love: {
        upright: 'Your romantic wish is manifesting. What you\'ve been hoping for emotionally is on its way to you.',
        reversed: 'Be careful what you wish for—you might get it and realize it wasn\'t what you needed. Desire and genuine need aren\'t always the same.',
      },
      career: {
        upright: 'Professional satisfaction and recognition are approaching. Your wishes in this domain are coming true.',
        reversed: 'Achievement won\'t bring fulfillment if it\'s disconnected from purpose. Wish for meaning, not just success.',
      },
      life: {
        upright: 'Emotional completion and contentment are approaching. The wish card is granting what you\'ve been hoping for.',
        reversed: 'Accumulation isn\'t the same as satisfaction. Make sure you\'re wishing for what actually fills you up.',
      },
      ex: {
        upright: 'One day—and it might be sooner than you think—you\'ll look at your life and realize you have everything you need. Not because they came back, but because you became someone who doesn\'t need them to be whole.',
        reversed: 'If your only wish is for them to return, you\'re setting yourself up for disappointment. Even if it came true, would it actually make you happy? Wish bigger. Wish for yourself.',
      },
    },
  },
  {
    id: 31,
    name: 'Ten of Cups',
    arcana: 'Minor',
    vibe: 'The Radiant Home',
    description: 'Emotional fulfillment, family harmony, happily ever after, and lasting happiness.',
    url: '/assets/img/cards/Cups10.jpg',
    past: {
      love: {
        upright: 'You experienced the dream—genuine emotional fulfillment, shared vision, and the feeling of building something lasting together.',
        reversed: 'Behind the happy family image was dysfunction and disconnection. The rainbow was painted on, not earned.',
      },
      career: {
        upright: 'Your work perfectly supported your values and family life. Career and home existed in beautiful harmony.',
        reversed: 'Professional success came at the cost of family harmony. The "perfect" job created an imperfect home.',
      },
      life: {
        upright: 'You knew the feeling of being exactly where you belonged, surrounded by people who felt like home.',
        reversed: 'Despite having all the external markers of success, you felt homeless within yourself. Roots never took hold.',
      },
      ex: {
        upright: 'You built a vision together—the house, the future, the "someday" that felt so real you could taste it. That dream was genuine, even if the reality couldn\'t sustain it.',
        reversed: 'The picture you showed the world was a lie you both agreed to tell. Behind closed doors, it was nothing like the fairy tale. Maybe that\'s what hurts most—mourning something that was never as real as you pretended.',
      },
    },
    present: {
      love: {
        upright: 'Emotional wholeness and harmony are available to you now. The "home" feeling is emerging, whether through partnership or self-love.',
        reversed: 'The dream and reality aren\'t matching. Values are misaligned, and the rainbow feels like it\'s fading.',
      },
      career: {
        upright: 'Work and life are in harmony. Your career supports rather than depletes your emotional fulfillment.',
        reversed: 'Professional ambition is costing you family harmony. Reassess what true success means.',
      },
      life: {
        upright: 'The rainbow after the storm is appearing. You\'re finding your way to emotional completion and genuine belonging.',
        reversed: 'Something feels off beneath the surface. The vision needs examination—are you building what you actually want?',
      },
      ex: {
        upright: 'The family or future you dreamed of with them isn\'t the only path to fulfillment. Home can be rebuilt—sometimes with someone new, sometimes alone, always with yourself at the center.',
        reversed: 'Stop mourning the fantasy. The happy family image you\'re grieving wasn\'t sustainable—that\'s why it collapsed. Real happiness isn\'t a postcard; it\'s messier and more honest than what you had.',
      },
    },
    future: {
      love: {
        upright: 'Ultimate emotional fulfillment is approaching—the rainbow after your personal storm. Lasting love and genuine happiness are possible.',
        reversed: 'Don\'t chase a picture-perfect fantasy. Real emotional fulfillment comes from authentic connection, not Instagram-worthy appearances.',
      },
      career: {
        upright: 'Work-life harmony is achievable. Keep building toward alignment between professional success and personal values.',
        reversed: 'Ambition without boundaries will cost you what matters most. Protect your home life from career consumption.',
      },
      life: {
        upright: 'The ten cups are waiting for you—emotional completion, belonging, and genuine happiness. This is available to you.',
        reversed: 'True home is found within before it can exist without. Stop looking for someone else to complete the picture.',
      },
      ex: {
        upright: 'The happily-ever-after you wanted with them is still possible—just with a different cast. Your capacity for deep love and family didn\'t die with that relationship. It\'s waiting to be offered to the right situation.',
        reversed: 'If you keep chasing the ghost of what you imagined, you\'ll miss the reality of what\'s available. The rainbow isn\'t behind you. It\'s ahead—but only if you stop staring at the storm.',
      },
    },
  },
  {
    id: 32,
    name: 'Page of Cups',
    arcana: 'Minor',
    vibe: 'The Intuitive Messenger',
    description: 'Creative messages, new feelings, intuition, emotional exploration, and youthful romance.',
    url: '/assets/img/cards/Cups11.jpg',
    past: {
      love: {
        upright: 'Sweet, innocent beginnings—a crush that made your heart flutter, notes passed back and forth, the discovery of emotional vulnerability.',
        reversed: 'Emotional immaturity marked this connection. Moodiness, unrealistic expectations, or crushing on someone who could never reciprocate.',
      },
      career: {
        upright: 'Creative beginnings and intuitive leaps defined your professional path. You trusted your gut and followed emotional inspiration.',
        reversed: 'You ignored creative instincts or let insecurity suppress promising ideas. A message you should have received was lost.',
      },
      life: {
        upright: 'Curiosity and openness led you somewhere magical. Dreams and intuition guided your path.',
        reversed: 'You used fantasy and daydreaming to escape reality. Imagination became avoidance.',
      },
      ex: {
        upright: 'Remember the beginning? The shy messages, the nervous butterflies, the innocent discovery of each other? That sweetness was real, even if everything that came after complicated it.',
        reversed: 'There was always emotional immaturity in this connection—whether theirs, yours, or both. You treated serious things like games and games like serious things. The foundation was shaky from the start.',
      },
    },
    present: {
      love: {
        upright: 'A small emotional message or gesture is coming through—a soft text, a meaningful look, the beginning of something tender.',
        reversed: 'Mixed signals and emotional immaturity are creating confusion. Someone isn\'t communicating with adult clarity.',
      },
      career: {
        upright: 'Creative inspiration is arriving. Pay attention to intuitive hits and unexpected messages about your work.',
        reversed: 'You\'re blocking creative flow or ignoring your gut instincts. The message is there—you\'re just not listening.',
      },
      life: {
        upright: 'Stay curious and open. A message—perhaps through a dream, a sign, or a conversation—holds important meaning.',
        reversed: 'Reality is being avoided through fantasy and emotional escapism. Dreams shouldn\'t replace living.',
      },
      ex: {
        upright: 'A small gesture might come—a like, a text, a "just thinking of you." Don\'t read it as a grand romantic gesture. It\'s probably exactly what it looks like: small, tentative, and testing the waters.',
        reversed: 'The mixed signals aren\'t mixed—they\'re clear. When someone wants you, you know. When they send crumbs and breadcrumbs, they\'re feeding their ego, not building a bridge back to you.',
      },
    },
    future: {
      love: {
        upright: 'A sweet, sincere message of affection is coming. It may feel small, but its authenticity makes it meaningful.',
        reversed: 'A romantic message may arrive, but it might be immature or inconsistent. Don\'t build castles on shaky foundations.',
      },
      career: {
        upright: 'Creative inspiration and positive news about your work are approaching. Stay open to unexpected possibilities.',
        reversed: 'Be discerning about creative opportunities. Not every exciting idea is worth pursuing.',
      },
      life: {
        upright: 'Your intuition has a message for you. Listen to your heart, your dreams, and the synchronicities around you.',
        reversed: 'Escapism will become more tempting as a way to avoid difficult emotions. Face reality instead of fleeing into fantasy.',
      },
      ex: {
        upright: 'There may be a tender outreach from someone—possibly them, possibly someone new. It won\'t be a dramatic declaration, but sweetness has to start somewhere.',
        reversed: 'If communication resumes, pay attention to the maturity level. Are they reaching out as an adult who\'s done the work, or the same emotionally unavailable person wrapped in a gentler package?',
      },
    },
  },
  {
    id: 33,
    name: 'Knight of Cups',
    arcana: 'Minor',
    vibe: 'The Romantic Visionary',
    description: 'Romance, charm, proposals, following the heart, and emotional pursuit.',
    url: '/assets/img/cards/Cups12.jpg',
    past: {
      love: {
        upright: 'Someone swept you off your feet with romantic gestures and passionate declarations. The pursuit was intoxicating.',
        reversed: 'They were in love with the idea of love, not the reality of you. The charm was a costume, not a character trait.',
      },
      career: {
        upright: 'You followed your heart toward creative work, chasing a dream with romantic idealism.',
        reversed: 'A passion-driven career path proved unreliable. Beautiful dreams didn\'t pay the bills or create stability.',
      },
      life: {
        upright: 'You lived poetically, following beauty and emotion as your compass. Life was an adventure.',
        reversed: 'Melodrama and emotional excess created chaos. You drowned in feelings instead of riding them.',
      },
      ex: {
        upright: 'They showed up like a romance novel hero—charming, attentive, making you feel like the only person in the room. That intoxication was real, even if the person underneath couldn\'t sustain it.',
        reversed: 'They loved the chase more than the catch. Once they had you, the grand gestures stopped. The romantic wasn\'t romantic—they were addicted to the high of pursuit.',
      },
    },
    present: {
      love: {
        upright: 'Romantic energy is approaching. Someone may come to offer their heart, or you\'re being called to follow yours.',
        reversed: 'Charming words without substance are being offered. This is player energy—seduction without commitment.',
      },
      career: {
        upright: 'A creative or heart-led professional opportunity is calling you. Follow the passion.',
        reversed: 'Emotional instability is affecting your work. Ground yourself before making impulsive professional moves.',
      },
      life: {
        upright: 'Romance and beauty are guiding your path. Trust the emotional pull toward something meaningful.',
        reversed: 'Seduction energy is present—someone using charm as manipulation rather than genuine connection.',
      },
      ex: {
        upright: 'Someone may approach with romantic intention—possibly them returning with grand gestures, possibly someone new sweeping in. Either way, charm is in the air.',
        reversed: 'If they\'re coming back with poetry and promises, remember: this is who they are when they want something. The question is who they\'ll be once they have it. You already know that answer.',
      },
    },
    future: {
      love: {
        upright: 'A romantic pursuit or proposal is coming. Someone will arrive with their heart in their hands, ready to offer it to you.',
        reversed: 'Charm will be offered, but verify the substance behind it. Knights sometimes ride away as quickly as they arrived.',
      },
      career: {
        upright: 'A passion-driven professional opportunity is approaching. When it arrives, you\'ll feel the pull in your heart.',
        reversed: 'Don\'t let romantic idealism override practical concerns. Dream jobs need to actually work.',
      },
      life: {
        upright: 'A romantic visionary is entering your story. When they arrive, you\'ll recognize them by how they make you feel.',
        reversed: 'Beauty and reliability are both important. Don\'t sacrifice one for the other.',
      },
      ex: {
        upright: 'Romance isn\'t dead for you—someone capable of grand gestures and genuine emotion is heading your way. It might be a transformed version of your ex, or someone who makes you forget why you were so hung up.',
        reversed: 'If you keep falling for pretty words and charming pursuit, you\'ll keep ending up here—heartbroken and confused. Look for someone whose actions match their romance after the chase is over.',
      },
    },
  },
  {
    id: 34,
    name: 'Queen of Cups',
    arcana: 'Minor',
    vibe: 'The Psychic Matriarch',
    description: 'Emotional mastery, intuition, empathy, compassion, and nurturing depth.',
    url: '/assets/img/cards/Cups13.jpg',
    past: {
      love: {
        upright: 'You were the empath, the healer, the one who felt everything. Your emotional depth created a safe space for intimacy.',
        reversed: 'You lost yourself in the relationship. Your emotional availability had no limits, and you poured until you were empty.',
      },
      career: {
        upright: 'You led with compassion and trusted your intuition in professional matters. Your emotional intelligence was a superpower.',
        reversed: 'You took everything personally and burned out from caring too much. Professional boundaries didn\'t exist.',
      },
      life: {
        upright: 'You were a safe harbor for others, holding space with deep emotional wisdom and intuitive knowing.',
        reversed: 'You absorbed everyone else\'s pain and forgot to process your own. Empathy became a burden instead of a gift.',
      },
      ex: {
        upright: 'You gave them the gift of being truly seen and emotionally held. Your depth of feeling created something sacred, even if they couldn\'t match it.',
        reversed: 'You martyred yourself for love. Every time they needed you, you showed up—even when showing up meant abandoning yourself. That\'s not love; that\'s self-destruction dressed as devotion.',
      },
    },
    present: {
      love: {
        upright: 'Your emotional wisdom and intuition are at their peak. You can sense what others feel, and that knowing guides you.',
        reversed: 'You\'re drowning in codependency or emotional martyrdom. Caring for others has become a way to avoid caring for yourself.',
      },
      career: {
        upright: 'Trust your gut at work—your intuition about people and situations is sharper than your logic right now.',
        reversed: 'Emotional exhaustion from absorbing workplace dynamics is depleting you. Compassion needs boundaries.',
      },
      life: {
        upright: 'You\'re in mastery of your emotional depth. This is healing energy—you can hold space for yourself and others.',
        reversed: 'You\'re overwhelmed by the collective pain you\'ve absorbed. Without boundaries, empathy becomes a curse.',
      },
      ex: {
        upright: 'You already know how they feel. Your intuition has the answer you\'re looking for—you just don\'t want to accept it. Trust what you sense, even when it hurts.',
        reversed: 'Stop being their therapist, their mother, their safe space while they give you nothing. Your emotional labor isn\'t a gift if it\'s extracted without gratitude or reciprocity. You\'re being used.',
      },
    },
    future: {
      love: {
        upright: 'Emotional mastery will make you undeniable. You\'ll be so attuned to your own heart that no one can manipulate or drain you.',
        reversed: 'Protect your empathic gifts. Not everyone who wants access to your emotional depth deserves it.',
      },
      career: {
        upright: 'Your intuition will guide powerful professional decisions. Trust your knowing.',
        reversed: 'Set emotional boundaries at work or compassion fatigue will derail your career.',
      },
      life: {
        upright: 'The wise empath rises. Your emotional depth becomes wisdom instead of wound.',
        reversed: 'You cannot heal others if you\'re bleeding. Fill your own cup first.',
      },
      ex: {
        upright: 'Your emotional mastery will eventually transcend this heartbreak. You\'ll be able to love deeply again without losing yourself—and that\'s the real goal.',
        reversed: 'If you keep pouring your emotional gifts into people who don\'t reciprocate, you\'ll stay empty forever. The next relationship needs to involve someone who can actually hold space for you too.',
      },
    },
  },
  {
    id: 35,
    name: 'King of Cups',
    arcana: 'Minor',
    vibe: 'The Master of Calm',
    description: 'Emotional maturity, calm leadership, wisdom, diplomacy, and balanced feeling.',
    url: '/assets/img/cards/Cups14.jpg',
    past: {
      love: {
        upright: 'There was deep, mature love here—someone who could feel everything but wasn\'t ruled by it. They were your emotional anchor in stormy waters.',
        reversed: 'Emotional manipulation disguised as control. What looked like calm was actually coldness, and wisdom was used to gaslight rather than guide.',
      },
      career: {
        upright: 'A wise mentor or leader who navigated professional challenges with emotional intelligence and steady calm.',
        reversed: 'An emotionally manipulative boss who used favoritism, mood swings, or passive aggression to control.',
      },
      life: {
        upright: 'You achieved emotional mastery—feeling the waves without being tossed by them. Inner peace was earned through work.',
        reversed: 'Emotions were repressed rather than processed, leading to eventual explosion. Control without integration isn\'t mastery.',
      },
      ex: {
        upright: 'At their best, they were solid—emotionally mature, able to hold space for you without drowning in it. That version of them was real.',
        reversed: 'Their "calm" was actually emotional suppression. Their "wisdom" was actually manipulation. What you mistook for maturity was just a sophisticated form of control. You were being managed, not loved.',
      },
    },
    present: {
      love: {
        upright: 'You\'re achieving emotional balance—feeling deeply without being controlled by those feelings. This is maturity.',
        reversed: 'Emotional manipulation or passive aggression is present. Someone is using "calm" as a weapon to maintain control.',
      },
      career: {
        upright: 'Your emotional intelligence is a professional superpower right now. Lead with heart and wisdom.',
        reversed: 'Emotional wisdom is being used for manipulation rather than genuine leadership. Check your motives.',
      },
      life: {
        upright: 'You\'re the calm center in the storm. Waves come, and you acknowledge them without being swept away.',
        reversed: 'Control has become coldness. What looks like stability might actually be emotional unavailability.',
      },
      ex: {
        upright: 'You\'re doing the work. You\'re feeling the grief without letting it control you. You\'re processing without performing. This is how healing actually looks—boring, quiet, daily work.',
        reversed: 'Numbing isn\'t the same as peace. If you\'ve gone cold to avoid feeling, you haven\'t healed—you\'ve just buried the pain deeper. Real emotional maturity means feeling it all, not shutting down.',
      },
    },
    future: {
      love: {
        upright: 'Emotional maturity in love is coming—either through a partner who embodies it or through your own evolution into someone unshakeable.',
        reversed: 'Don\'t confuse emotional control with emotional availability. True partnership requires vulnerability, not just stability.',
      },
      career: {
        upright: 'Leadership through emotional wisdom awaits. Your ability to remain calm under pressure will open doors.',
        reversed: 'Balance logic with genuine feeling. Being too detached will cost you connection.',
      },
      life: {
        upright: 'The master of calm is who you\'re becoming. Emotional wisdom will guide your path forward.',
        reversed: 'True mastery includes vulnerability. Control without openness becomes isolation.',
      },
      ex: {
        upright: 'You will love again—with more maturity, more wisdom, and more ability to weather storms. The next relationship will benefit from everything this one taught you.',
        reversed: 'If you close off emotionally to protect yourself from ever hurting again, you\'ll protect yourself from ever loving again too. Healing doesn\'t mean hardening. It means opening back up—carefully, wisely, but genuinely.',
      },
    },
  },
  // Wands (36-49)
  {
    id: 36,
    name: 'Ace of Wands',
    arcana: 'Minor',
    vibe: 'The Spark of Creation',
    description: 'A burst of new energy, inspiration, and willpower. The seed of passion and creative potential.',
    url: '/assets/img/cards/Wands01.jpg',
    past: {
      love: {
        upright: 'A powerful attraction ignited your world. The chemistry was undeniable and electric from the very first moment. This passion set the tone for everything that followed.',
        reversed: 'The spark never truly caught fire. What seemed like exciting potential fizzled into disappointment. You may have forced something that wasn\'t meant to ignite.',
      },
      career: {
        upright: 'A brilliant idea or entrepreneurial spark launched your professional journey. You seized an opportunity with enthusiasm and it shaped your current path.',
        reversed: 'Creative blocks or false starts plagued your past efforts. Projects remained stuck in the idea phase, never manifesting into reality.',
      },
      life: {
        upright: 'A bold beginning changed your trajectory. You said yes to adventure, took the leap, and that courage defined a chapter of your life.',
        reversed: 'Fear of failure kept you from starting. You watched opportunities pass because you couldn\'t commit to the first step.',
      },
      ex: {
        upright: 'The beginning was intoxicating. You felt alive in a way you hadn\'t before. That initial fire was real—it just couldn\'t sustain itself. Don\'t mistake the death of the relationship for proof the passion was fake.',
        reversed: 'Be honest: the spark was never really there. You wanted it to be. You tried to manufacture chemistry that didn\'t exist naturally. The relationship was built on hope, not heat.',
      },
    },
    present: {
      love: {
        upright: 'New romantic energy is available to you. Whether it\'s a fresh attraction or renewed passion in an existing connection, you\'re feeling the pull toward something exciting.',
        reversed: 'You\'re trying to force passion where there isn\'t any. The timing might be off, or you\'re directing your fire at the wrong person. Step back and let attraction flow naturally.',
      },
      career: {
        upright: 'Creative inspiration is at its peak. A new venture, project, or business idea is calling to you. Trust your instincts and take action while the fire is hot.',
        reversed: 'Scattered energy is killing your momentum. You have too many ideas and not enough follow-through. Pick one thing and commit.',
      },
      life: {
        upright: 'You\'re filled with enthusiasm and ready to create something new. Your willpower is strong. Channel this energy into meaningful action.',
        reversed: 'Burnout or lack of direction is draining your vitality. You need to recharge before you can create anything worthwhile.',
      },
      ex: {
        upright: 'You\'re feeling the urge to reach out, to try again, to reignite what was lost. That fire in your chest is real—but ask yourself: is it for them, or is it just the memory of passion you\'re chasing?',
        reversed: 'The desire keeps flickering but won\'t catch. You want to want them again. You\'re trying to resurrect something that\'s already cold. Stop blowing on dead embers.',
      },
    },
    future: {
      love: {
        upright: 'A passionate new beginning is approaching. Someone or something will ignite your heart in a way you didn\'t expect. Stay open to unexpected connections.',
        reversed: 'Don\'t force the spark. If you rush into something without genuine chemistry, you\'ll end up disappointed. Wait for real fire, not manufactured heat.',
      },
      career: {
        upright: 'A brilliant opportunity will present itself. Be ready to act quickly when inspiration strikes—this could be the venture that defines your success.',
        reversed: 'False starts and delays are likely. Make sure your foundation is solid before launching. Patience now prevents failure later.',
      },
      life: {
        upright: 'New inspiration and creative energy are coming. A fresh chapter is about to begin—embrace it with enthusiasm.',
        reversed: 'The fire will come, but not yet. Focus on healing and preparation before your next big beginning.',
      },
      ex: {
        upright: 'New passion is coming—and it won\'t be with them. The universe is preparing someone or something that will make you forget you ever mourned this loss. Your only job is to stay open.',
        reversed: 'You\'re hoping for a dramatic reconciliation that probably won\'t happen the way you imagine. Even if they reach out, the original problem remains. Don\'t confuse a flicker for a flame.',
      },
    },
  },
  {
    id: 37,
    name: 'Two of Wands',
    arcana: 'Minor',
    vibe: 'The Global Visionary',
    description: 'Planning, discovery, and the power of choice. Standing at the crossroads with the world in your hands.',
    url: '/assets/img/cards/Wands02.jpg',
    past: {
      love: {
        upright: 'You stood at a crossroads in love and chose a direction. You made plans together, dreamed of a shared future, and believed in the possibilities.',
        reversed: 'Fear of the unknown kept you trapped in indecision. You wanted more but were too afraid to leave your comfort zone.',
      },
      career: {
        upright: 'A pivotal decision expanded your professional horizons. You chose growth over safety and it opened new worlds.',
        reversed: 'Hesitation cost you an opportunity. You watched others advance while you stayed stuck in analysis paralysis.',
      },
      life: {
        upright: 'You held the world in your hands and chose your path wisely. Your vision and planning paid off.',
        reversed: 'Restlessness without action defined that period. You dreamed big but never stepped outside your castle walls.',
      },
      ex: {
        upright: 'You genuinely believed you were building something together. The future plans were real to you. Don\'t be ashamed of having vision—the failure wasn\'t in dreaming, it was in the compatibility.',
        reversed: 'You knew deep down it wasn\'t right, but leaving felt scarier than staying. You chose the known misery over the unknown freedom. How did that work out?',
      },
    },
    present: {
      love: {
        upright: 'You\'re ready to explore new romantic horizons. The familiar no longer satisfies you. You\'re craving adventure and connection that challenges you.',
        reversed: 'You\'re paralyzed between options or too afraid to commit to any direction. This indecision is costing you opportunities.',
      },
      career: {
        upright: 'Expansion is calling. You\'re ready to take your work to the next level—new markets, bigger visions, greater ambitions.',
        reversed: 'You\'re looking at the horizon but ignoring what\'s right in front of you. Grand plans mean nothing without practical steps.',
      },
      life: {
        upright: 'The world is open to you. Multiple paths await, and you have the power to choose. Don\'t let fear shrink your vision.',
        reversed: 'You\'re stuck in planning mode, never executing. The map is useless if you never start walking.',
      },
      ex: {
        upright: 'You\'re finally seeing a world beyond them. The horizon is bigger than that one relationship. This restlessness isn\'t grief—it\'s growth.',
        reversed: 'You keep looking back instead of forward. One foot in the past, one in the present, going nowhere. Pick a direction.',
      },
    },
    future: {
      love: {
        upright: 'Your romantic world is about to expand significantly. New people, new experiences, new understanding of what you actually want in love.',
        reversed: 'Indecision will cost you. The window of opportunity won\'t stay open forever. Make a choice before circumstances choose for you.',
      },
      career: {
        upright: 'Major expansion awaits. Your vision will take you beyond current limitations. Prepare for bigger playing fields.',
        reversed: 'Fear of the unknown is threatening to keep you small. Growth requires discomfort—accept it or stagnate.',
      },
      life: {
        upright: 'A bigger life is calling. Travel, opportunity, and expanded perspectives are on the horizon.',
        reversed: 'The horizon exists, but you have to actually walk toward it. Planning without movement is just daydreaming.',
      },
      ex: {
        upright: 'You\'re about to realize just how small your world had become with them. The future holds people and experiences that will dwarf this chapter.',
        reversed: 'Stop waiting for clarity that isn\'t coming. Whether you try again or walk away forever, you need to decide. Limbo is not a life strategy.',
      },
    },
  },
  {
    id: 38,
    name: 'Three of Wands',
    arcana: 'Minor',
    vibe: 'The Horizon Watcher',
    description: 'Expansion, foresight, and watching your ships come in. Your efforts are about to bear fruit.',
    url: '/assets/img/cards/Wands03.jpg',
    past: {
      love: {
        upright: 'You invested heavily in a relationship and waited for it to grow. You put in the work and watched hopefully for returns.',
        reversed: 'Long-distance strain or mismatched life trajectories created distance. You were on different journeys entirely.',
      },
      career: {
        upright: 'Your strategic planning and patience paid off. International opportunities or major expansion came from your foresight.',
        reversed: 'Your vision was too limited, or external delays frustrated your goals. The ships didn\'t arrive when expected.',
      },
      life: {
        upright: 'You trusted the process and watched your investments of time and energy return to you.',
        reversed: 'Playing it safe kept you stuck on the shore while others sailed to new horizons.',
      },
      ex: {
        upright: 'You did everything right. You invested, you waited, you believed. The failure wasn\'t your effort—it was the vessel you chose to invest in.',
        reversed: 'You were watching for ships that were never coming. They didn\'t share your vision of the future. You saw potential; they saw convenience.',
      },
    },
    present: {
      love: {
        upright: 'Your romantic efforts are beginning to show results. What you\'ve been building is starting to materialize. Stay patient.',
        reversed: 'You\'re realizing your partner isn\'t on the same journey. The visions don\'t align, and that disconnect is becoming impossible to ignore.',
      },
      career: {
        upright: 'Your hard work is paying off. Results are coming in. The strategic moves you made are bearing fruit.',
        reversed: 'Delays and setbacks are testing your patience. Reassess your strategy—something needs adjusting.',
      },
      life: {
        upright: 'Trust your trajectory. You\'ve done the work; now watch it manifest. Your ships are coming in.',
        reversed: 'Energy is waning before you\'ve reached your goal. Don\'t give up at the setting sun—dawn follows.',
      },
      ex: {
        upright: 'You\'re starting to see a horizon that doesn\'t include them. Life is expanding, opportunities are emerging, and none of it depends on that relationship.',
        reversed: 'You\'re still standing on the shore waiting for them to return. How long will you watch an empty horizon? At some point, you have to sail your own ship.',
      },
    },
    future: {
      love: {
        upright: 'Your romantic investments will pay off—possibly not where you expected. New horizons in love are approaching.',
        reversed: 'Don\'t wait forever on the shore. Sometimes you have to create your own opportunities rather than waiting for them to arrive.',
      },
      career: {
        upright: 'Success is arriving. Your patience and strategic thinking will be rewarded with significant expansion.',
        reversed: 'Manage your expectations. The ships may take longer than planned, or arrive looking different than you imagined.',
      },
      life: {
        upright: 'Expansion and progress are coming. What you\'ve been building is about to reach new shores.',
        reversed: 'Adjust your foresight. The destination may shift, but that doesn\'t mean the journey was wasted.',
      },
      ex: {
        upright: 'Your ships are coming in—and they\'re carrying opportunities, growth, and connections that have nothing to do with your past. Your future is rich; stop looking backward.',
        reversed: 'Waiting for them to change or return is like expecting ships from a port that no longer exists. The relationship is a sunken vessel. Mourn it and move on.',
      },
    },
  },
  {
    id: 39,
    name: 'Four of Wands',
    arcana: 'Minor',
    vibe: 'The Celebration of Spirit',
    description: 'Joy, homecoming, harmony, and reaching a milestone. A time of celebration and stability.',
    url: '/assets/img/cards/Wands04.jpg',
    past: {
      love: {
        upright: 'A time of harmony, celebration, and feeling at home with someone. Perhaps an engagement, moving in together, or a relationship milestone.',
        reversed: 'A celebration that was cancelled or felt hollow. The foundation wasn\'t as solid as the party pretended.',
      },
      career: {
        upright: 'A successful project completion that deserved celebration. You hit a major milestone and enjoyed the recognition.',
        reversed: 'The launch was underwhelming or team friction overshadowed the victory. Success felt incomplete.',
      },
      life: {
        upright: 'Community, belonging, and stability surrounded you. Life had a celebratory quality worth appreciating.',
        reversed: 'You felt like an outsider in your own life. The roots never quite took hold.',
      },
      ex: {
        upright: 'There were genuinely beautiful moments—the celebrations, the milestones, the feeling of "home." Those memories are real. The relationship failing doesn\'t erase the moments that were good.',
        reversed: 'The happy moments were performances. You celebrated things that were already broken, pretended stability that didn\'t exist. The Instagram version was a lie.',
      },
    },
    present: {
      love: {
        upright: 'Harmony and stability in your romantic life. If single, you\'ve found peace within yourself that makes you ready for genuine partnership.',
        reversed: 'Tension in the domestic sphere. The home doesn\'t feel like home. Something fundamental is off-balance.',
      },
      career: {
        upright: 'A milestone achieved. Take time to celebrate your wins—you\'ve earned this moment of recognition.',
        reversed: 'The victory feels hollow. You hit the goal but something is missing. External success without internal satisfaction.',
      },
      life: {
        upright: 'Life is worth celebrating right now. You have community, support, and reasons for joy. Don\'t overlook these blessings.',
        reversed: 'Where is your tribe? You\'re lacking the support and belonging that makes life feel stable.',
      },
      ex: {
        upright: 'You\'ve found your footing again. The stability you thought only existed with them? You\'re building it yourself. That\'s real strength.',
        reversed: 'You\'re mourning the idea of home more than the actual person. Be honest: were you happy, or just comfortable? Was it celebration, or just routine?',
      },
    },
    future: {
      love: {
        upright: 'A joyful event in love is approaching—a reunion, commitment, or celebration that brings genuine happiness and stability.',
        reversed: 'Don\'t celebrate prematurely. Make sure the foundation is truly solid before declaring victory.',
      },
      career: {
        upright: 'A successful launch and well-deserved celebration are coming. Your hard work is about to be recognized publicly.',
        reversed: 'Secure the win before popping champagne. There may be loose ends that need tying.',
      },
      life: {
        upright: 'Joy, community, and celebration await. A milestone or homecoming will bring deep satisfaction.',
        reversed: 'Build your support system first. The celebration will be meaningful only if you have people to share it with.',
      },
      ex: {
        upright: 'True stability is coming—the kind that doesn\'t depend on one person. You\'re building a home within yourself that no breakup can destroy.',
        reversed: 'If you\'re hoping for a reconciliation celebration, check your foundations. What actually changed? Would you just be rebuilding the same unstable structure?',
      },
    },
  },
  {
    id: 40,
    name: 'Five of Wands',
    arcana: 'Minor',
    vibe: 'The Sparring Ring',
    description: 'Competition, conflict, and creative tension. Not a battle to the death, but a necessary struggle.',
    url: '/assets/img/cards/Wands05.jpg',
    past: {
      love: {
        upright: 'The relationship was marked by constant bickering, ego clashes, and competition. You were sparring partners more than lovers.',
        reversed: 'The fighting finally stopped—either through resolution or exhaustion. Peace came after the storm.',
      },
      career: {
        upright: 'A competitive environment sharpened your skills. The challenge pushed you to grow stronger.',
        reversed: 'Office politics and toxic competition drained you. The fighting became pointless.',
      },
      life: {
        upright: 'Friction created growth. You learned to hold your own in conflict and became stronger for it.',
        reversed: 'You either withdrew from all conflict or finally found peace after chaos.',
      },
      ex: {
        upright: 'You fought more than you loved. Every conversation became a competition. You both needed to be right more than you needed to be together.',
        reversed: 'The endless arguments finally exhausted both of you into silence. Not peace—just two fighters too tired to keep swinging.',
      },
    },
    present: {
      love: {
        upright: 'Minor conflicts and ego battles are dominating your romantic landscape. It\'s not serious war, but the constant friction is exhausting.',
        reversed: 'The fighting is dying down. You\'re choosing peace over the need to win every argument.',
      },
      career: {
        upright: 'You\'re in a competitive environment that requires you to fight for your position. Stay sharp, but don\'t take it personally.',
        reversed: 'The chaos is settling. You\'re finding your way through the competition or choosing to step out of the ring.',
      },
      life: {
        upright: 'Creative tension and conflict are present, but it\'s sparring, not war. Don\'t escalate minor friction into major battles.',
        reversed: 'You\'re either avoiding all conflict unhealthily or finally finding resolution.',
      },
      ex: {
        upright: 'Still playing games? Checking their stories, subtle competitions on social media, one-upping each other\'s "moving on" performance? This petty warfare keeps you connected to them. Is that what you want?',
        reversed: 'The urge to fight with them is fading. You\'re realizing winning against them means nothing. The only real victory is indifference.',
      },
    },
    future: {
      love: {
        upright: 'Healthy competition or creative tension may enter your love life. It can be playful—don\'t let it become toxic.',
        reversed: 'The conflict will resolve, but only if you stop engaging. Peace requires you to lay down your weapon first.',
      },
      career: {
        upright: 'Competition is coming that will push you to grow. Rise to the challenge—this is how excellence is forged.',
        reversed: 'Know when to step out of the ring. Not every fight is worth your energy.',
      },
      life: {
        upright: 'Some friction ahead, but it\'s the kind that polishes you. Embrace healthy conflict.',
        reversed: 'Exhaustion from endless battles. Choose your fights wisely or burn out.',
      },
      ex: {
        upright: 'If there\'s continued contact, expect some sparring. The question is whether this conflict is productive or just prolonging the pain.',
        reversed: 'The fighting will end—either because you both mature or because you finally stop showing up to the ring. Only one of those is actual growth.',
      },
    },
  },
  {
    id: 41,
    name: 'Six of Wands',
    arcana: 'Minor',
    vibe: 'The Public Victory',
    description: 'Success, recognition, triumph, and public acclaim. You\'ve earned your place on the winner\'s platform.',
    url: '/assets/img/cards/Wands06.jpg',
    past: {
      love: {
        upright: 'A relationship where you felt celebrated and victorious. The connection elevated your status and confidence.',
        reversed: 'You felt overshadowed or never properly recognized in the relationship. Your wins went unacknowledged.',
      },
      career: {
        upright: 'A major professional triumph—promotion, recognition, or public success that defined a chapter of your career.',
        reversed: 'Someone else took credit for your work, or your success was undermined by politics.',
      },
      life: {
        upright: 'A period of confidence and public recognition. You were winning visibly and feeling it.',
        reversed: 'Imposter syndrome plagued you even at the top. The crown felt borrowed, not earned.',
      },
      ex: {
        upright: 'You felt like a winner with them. They made you feel special, celebrated, admired. Losing that validation is part of what hurts.',
        reversed: 'You gave them all the glory while diminishing yourself. They were the star; you were the supporting actor in your own relationship.',
      },
    },
    present: {
      love: {
        upright: 'You\'re glowing, and everyone can see it. Your confidence is magnetic. You don\'t need external validation, but you\'re getting it anyway.',
        reversed: 'Ego is getting in the way of connection, or you\'re experiencing a fall from romantic grace. The victory parade has stalled.',
      },
      career: {
        upright: 'Recognition is yours. You\'re the one people are watching, following, and celebrating. Own this moment.',
        reversed: 'Your spotlight is being dimmed—either by competitors or your own self-sabotage.',
      },
      life: {
        upright: 'Victory and recognition are flowing your way. Enjoy the parade; you\'ve earned it.',
        reversed: 'The crown feels heavy or hollow. External success isn\'t matching internal fulfillment.',
      },
      ex: {
        upright: 'You\'re winning the breakup. You look good, you\'re thriving, and yes—they\'ve noticed. But here\'s the real question: is your success for you, or just performance for their benefit?',
        reversed: 'Watching them thrive while you struggle is painful. But their victory isn\'t your defeat. Your journeys are separate now.',
      },
    },
    future: {
      love: {
        upright: 'Public recognition or a triumphant moment in love is coming. A celebration of your romantic success awaits.',
        reversed: 'Don\'t let the need for validation drive your romantic choices. Real love doesn\'t need an audience.',
      },
      career: {
        upright: 'Major professional recognition is approaching. Prepare for your moment in the spotlight.',
        reversed: 'Ensure your victory is earned, not just performed. Hollow wins lead to hollow crowns.',
      },
      life: {
        upright: 'Triumph is coming. You\'ll be celebrated for your achievements and feel genuinely victorious.',
        reversed: 'True victory is internal. Don\'t sacrifice authenticity for applause.',
      },
      ex: {
        upright: 'Your best revenge is living well—and you\'re about to live very well indeed. Success that has nothing to do with them is the most satisfying kind.',
        reversed: 'If you\'re imagining their reaction to your future success, they still own too much real estate in your head. Win for yourself, not for their regret.',
      },
    },
  },
  {
    id: 42,
    name: 'Seven of Wands',
    arcana: 'Minor',
    vibe: 'The Higher Ground',
    description: 'Defense, perseverance, and standing your ground. You have the advantage—use it.',
    url: '/assets/img/cards/Wands07.jpg',
    past: {
      love: {
        upright: 'You spent considerable energy defending the relationship or fighting for your position within it. You stood your ground.',
        reversed: 'The constant defense exhausted you. You gave up fighting because you ran out of strength.',
      },
      career: {
        upright: 'You defended a controversial position or fought to maintain your professional standing. Your courage paid off.',
        reversed: 'You were overwhelmed by opposition or pushed out of a position you deserved.',
      },
      life: {
        upright: 'You maintained strong boundaries and used your advantages wisely. Your defense was successful.',
        reversed: 'The shield finally broke. Self-doubt replaced the courage you once had.',
      },
      ex: {
        upright: 'You fought hard for that relationship—against doubters, against problems, against your own misgivings. Your loyalty was fierce even when it shouldn\'t have been.',
        reversed: 'You kept defending them to everyone—including yourself—until you simply couldn\'t anymore. The exhaustion of constant justification finally broke you.',
      },
    },
    present: {
      love: {
        upright: 'You\'re protecting your heart and maintaining boundaries. Your guard is up, and for good reason. Don\'t let anyone breach your defenses prematurely.',
        reversed: 'You\'ve dropped your defenses too much, allowing others to walk over you. Or you\'re so defended that no one can reach you at all.',
      },
      career: {
        upright: 'Stand your ground. You have the high position—don\'t surrender it to pressure or competition.',
        reversed: 'You\'re overwhelmed by challenges. Assess whether this battle is worth fighting or if strategic retreat is smarter.',
      },
      life: {
        upright: 'Maintain your boundaries. You\'ve earned your position. Don\'t let others push you off your ground.',
        reversed: 'Not every hill is worth dying on. Know when to defend and when to let go.',
      },
      ex: {
        upright: 'Your walls are up, and they should be. Every time they reach out or try to pull you back, your job is to hold the line. Your peace is the territory you\'re defending.',
        reversed: 'You\'re either letting them walk all over your boundaries or you\'ve become so armored that no one—not even healthy connections—can reach you. Neither extreme serves you.',
      },
    },
    future: {
      love: {
        upright: 'You\'ll successfully maintain your boundaries. Those testing you will fail to breach your defenses.',
        reversed: 'Know when to defend and when to simply walk away. Some battles aren\'t worth winning.',
      },
      career: {
        upright: 'Your position is secure. Your courage and persistence will protect what you\'ve built.',
        reversed: 'Choose your battles carefully. Some positions cost more to defend than they\'re worth.',
      },
      life: {
        upright: 'Your higher ground is secure. Continue standing firm.',
        reversed: 'Constant defense is exhausting. Sometimes retreat or reposition is the smarter strategy.',
      },
      ex: {
        upright: 'You\'re going to hold the line. They won\'t be able to pull you back into their orbit no matter what they try. Your healing is defended territory now.',
        reversed: 'If you keep fighting the same battle with the same person, you\'ll eventually lose—if not the fight, then yourself. Some enemies you defeat by refusing to engage.',
      },
    },
  },
  {
    id: 43,
    name: 'Eight of Wands',
    arcana: 'Minor',
    vibe: 'The Arrow of Speed',
    description: 'Rapid movement, swift action, and things coming together quickly. The period of waiting is over.',
    url: '/assets/img/cards/Wands08.jpg',
    past: {
      love: {
        upright: 'A whirlwind romance that moved at lightning speed. Everything happened fast—meeting, connecting, falling.',
        reversed: 'The relationship crashed as fast as it started. What burned bright burned out quickly.',
      },
      career: {
        upright: 'A period of rapid professional progress. Deals closed quickly, projects accelerated, momentum was unstoppable.',
        reversed: 'Hasty decisions led to missed targets. Speed without direction caused chaos.',
      },
      life: {
        upright: 'Life accelerated suddenly. After a period of stagnation, everything shifted at once.',
        reversed: 'You felt out of control, swept along by circumstances faster than you could process.',
      },
      ex: {
        upright: 'It all happened so fast—the falling, the intensity, the feeling of destiny. Speed felt like fate. But fast beginnings often have fast endings.',
        reversed: 'The crash was just as sudden as the connection. One moment everything, the next moment nothing. Whiplash heartbreak.',
      },
    },
    present: {
      love: {
        upright: 'Communication is flying. Messages, calls, rapid developments. If you\'ve been waiting for something to happen, it\'s happening now.',
        reversed: 'Miscommunication and chaotic energy are creating confusion. Slow down before you crash.',
      },
      career: {
        upright: 'Rapid movement and momentum. Ride this wave of productivity—the energy won\'t last forever.',
        reversed: 'Too many things moving at once without coordination. Pull back and create order.',
      },
      life: {
        upright: 'Swift changes and sudden downloads of information are coming. Stay alert and ready to act.',
        reversed: 'Energy is scattered in too many directions. Ground yourself before proceeding.',
      },
      ex: {
        upright: 'Something is coming—a text, a call, news about them, or contact from them. The communication blackout is about to break. How will you respond when it does?',
        reversed: 'Mixed signals, misread texts, words said in haste. Either they\'re creating confusion, or you are. Nothing good comes from rushed communication in this state.',
      },
    },
    future: {
      love: {
        upright: 'Things will move fast in your romantic life. Be prepared for rapid developments that require quick decisions.',
        reversed: 'Speed isn\'t always good. What comes fast may not last. Prioritize wisdom over velocity.',
      },
      career: {
        upright: 'Rapid progress and swift opportunities are coming. Be ready to move quickly when they arrive.',
        reversed: 'Delays and frustrations ahead. What should be fast will be slow. Patience required.',
      },
      life: {
        upright: 'Swift change is approaching. The arrows are in flight; prepare for impact.',
        reversed: 'Know your target before you fire. Speed without aim wastes energy.',
      },
      ex: {
        upright: 'If reconciliation happens, it will happen fast. If someone new arrives, they\'ll arrive suddenly. The waiting phase is ending.',
        reversed: 'Even if they reach out quickly, don\'t respond just as fast. Speed gave you this wound in the first place. Take your time.',
      },
    },
  },
  {
    id: 44,
    name: 'Nine of Wands',
    arcana: 'Minor',
    vibe: 'The Resilient Soul',
    description: 'Perseverance, resilience, and the final stretch. Battered but not broken.',
    url: '/assets/img/cards/Wands09.jpg',
    past: {
      love: {
        upright: 'The relationship was a battle of endurance. You were exhausted by the end, having fought through challenge after challenge.',
        reversed: 'You gave up right before the finish line, or built walls so high that nothing could get through.',
      },
      career: {
        upright: 'You pushed through a grueling professional challenge. The final stretch tested everything you had.',
        reversed: 'Burnout from refusing to delegate or ask for help. You collapsed under the weight.',
      },
      life: {
        upright: 'You survived. Whatever was thrown at you, you endured. That resilience defines you.',
        reversed: 'The walls you built to protect yourself became a prison. Hypervigilance exhausted you.',
      },
      ex: {
        upright: 'You were exhausted long before it ended. The relationship had become a war of attrition. You kept fighting out of stubbornness, not love.',
        reversed: 'Your defenses became so high that even legitimate love couldn\'t reach you. Or you gave up entirely, too wounded to try anymore.',
      },
    },
    present: {
      love: {
        upright: 'You\'re tired and wary, waiting for the next hit. Your guard is up because you\'ve been hurt before. This caution is understandable.',
        reversed: 'You\'re bringing old wounds into new situations. Your past is making you see threats that aren\'t there.',
      },
      career: {
        upright: 'The final stretch. You\'re exhausted but close to your goal. Don\'t give up now—you\'re almost there.',
        reversed: 'Burnout is real and present. Ask for help before you collapse completely.',
      },
      life: {
        upright: 'You\'ve survived everything life has thrown at you so far. This too shall pass. Stay resilient.',
        reversed: 'Paranoia and exhaustion are draining you. Not every shadow is a threat. Lower your guard occasionally.',
      },
      ex: {
        upright: 'You\'re wounded but standing. Every contact from them, every reminder, every trigger—you\'re bracing for impact. That\'s survival mode. It won\'t last forever.',
        reversed: 'You\'re so defensive now that you can\'t tell the difference between danger and safety. The walls protecting you from them are also blocking your healing.',
      },
    },
    future: {
      love: {
        upright: 'Your resilience will pay off. You\'re approaching the end of this difficult chapter. The healing finish line is near.',
        reversed: 'Rest before the final push. You can\'t cross the finish line if you collapse before you get there.',
      },
      career: {
        upright: 'Persistence will be rewarded. The finish line is in sight. Keep pushing.',
        reversed: 'Know when to rest. The warrior who never sleeps eventually falls.',
      },
      life: {
        upright: 'The last hurdle is approaching. Your resilience will carry you through.',
        reversed: 'You don\'t have to fight every battle alone. Accept support when it\'s offered.',
      },
      ex: {
        upright: 'You\'re almost through this. The worst of the pain is behind you. One more stretch and you\'ll be on the other side.',
        reversed: 'You\'re going to need to lower those walls eventually, or you\'ll spend your life fortified against love that\'s trying to reach you. Protection has a shelf life.',
      },
    },
  },
  {
    id: 45,
    name: 'Ten of Wands',
    arcana: 'Minor',
    vibe: 'The Weight of Success',
    description: 'Burden, overextension, and carrying too much. The cost of taking on everything alone.',
    url: '/assets/img/cards/Wands10.jpg',
    past: {
      love: {
        upright: 'The relationship felt like a job. You carried all the emotional weight while they contributed little.',
        reversed: 'You finally put down the burden—either by speaking up or by leaving entirely.',
      },
      career: {
        upright: 'Success became a burden. You took on too much and became a victim of your own achievements.',
        reversed: 'You learned to delegate or quit something that was crushing you. Relief followed.',
      },
      life: {
        upright: 'You tried to carry the world on your shoulders. It wasn\'t necessary, but you did it anyway.',
        reversed: 'A necessary breakdown led to letting go. Sometimes collapse is the path to freedom.',
      },
      ex: {
        upright: 'You carried that relationship. The planning, the emotional labor, the fixing, the trying—all you. They just showed up and let you do the work.',
        reversed: 'The breakdown was inevitable. You were running on empty, giving everything to someone who gave nothing back. Something had to give.',
      },
    },
    present: {
      love: {
        upright: 'You\'re still carrying the emotional weight of the breakup. The grief, the analysis, the memories—it\'s heavy. Too heavy.',
        reversed: 'You\'re beginning to release some of the burden. Learning to put down what\'s not yours to carry.',
      },
      career: {
        upright: 'You\'re overloaded. Taking on too much is crushing you. Delegate or collapse.',
        reversed: 'Relief is possible. You\'re starting to shed unnecessary responsibilities.',
      },
      life: {
        upright: 'Put some of those sticks down. You don\'t have to carry everything. No one is asking you to.',
        reversed: 'The load is lightening. You\'re learning that less can be more.',
      },
      ex: {
        upright: 'You\'re still doing all the emotional heavy lifting—now about the breakup instead of the relationship. Still their emotional servant, just without the relationship. Put. It. Down.',
        reversed: 'You\'re starting to realize that their problems, their feelings, their growth—none of it is your responsibility anymore. That\'s not cold; that\'s freedom.',
      },
    },
    future: {
      love: {
        upright: 'The burden will lift. You\'ll finally release the weight you\'ve been carrying and feel genuine relief.',
        reversed: 'Something will break if you don\'t consciously put it down. Choose what to release before collapse chooses for you.',
      },
      career: {
        upright: 'Help is coming, or you\'ll finally learn to delegate. The crushing weight will ease.',
        reversed: 'Don\'t wait for burnout to make you stop. Drop something now while you still have a choice.',
      },
      life: {
        upright: 'Relief is coming. The weight you\'ve been carrying will finally be released.',
        reversed: 'Too much fuel smothers fire. Simplify before you extinguish yourself.',
      },
      ex: {
        upright: 'You will put this down. All of it—the guilt, the hope, the grief, the what-ifs. One day you\'ll set it down and simply walk away. That day is coming.',
        reversed: 'If you keep carrying their emotional weight, you\'ll never have room for anything—or anyone—else. They\'re not worth your collapse.',
      },
    },
  },
  {
    id: 46,
    name: 'Page of Wands',
    arcana: 'Minor',
    vibe: 'The Creative Spark',
    description: 'Enthusiasm, exploration, and the first flickering of an idea. Youthful fire and curiosity.',
    url: '/assets/img/cards/Wands11.jpg',
    past: {
      love: {
        upright: 'A flirtatious, playful beginning. Lots of excited texts and butterflies. The energy was young and full of possibility.',
        reversed: 'Someone who talked a big game but never followed through. Flaky energy that promised more than it delivered.',
      },
      career: {
        upright: 'An exciting new project or learning opportunity sparked your enthusiasm. You were curious and eager.',
        reversed: 'False starts and abandoned projects. Lots of beginnings, no completions.',
      },
      life: {
        upright: 'Your inner child led the way. You followed curiosity without needing a plan.',
        reversed: 'Scattered energy and boredom. You started many things and finished none.',
      },
      ex: {
        upright: 'The beginning was exciting and playful. There was genuine curiosity about each other. That spark was real, even if it didn\'t sustain.',
        reversed: 'They were all potential and no execution. Big dreams, exciting promises, zero delivery. You fell for the trailer, not the movie.',
      },
    },
    present: {
      love: {
        upright: 'New, exciting energy is emerging in your romantic life. Someone may be testing the waters, or you\'re feeling a spark of attraction.',
        reversed: 'Don\'t get too excited yet. The energy is playful but lacks substance. Wait for follow-through.',
      },
      career: {
        upright: 'A new project or opportunity is capturing your imagination. Follow your curiosity—it\'s leading somewhere.',
        reversed: 'Immaturity or lack of commitment is blocking your progress. Stop starting and start finishing.',
      },
      life: {
        upright: 'Stay curious. Follow your enthusiasm without requiring a perfect plan. The spark knows where it wants to go.',
        reversed: 'Potential without groundedness. The fire is there but the kindling is missing.',
      },
      ex: {
        upright: 'There might be playful contact—a casual message, something light. It\'s testing energy, not serious reconciliation. Don\'t read more into it than exists.',
        reversed: 'If they\'re reaching out with vague energy and no real commitment, it\'s the same pattern that ended things in the first place. Cute texts aren\'t accountability.',
      },
    },
    future: {
      love: {
        upright: 'Exciting news or a spark of new attraction is coming. Stay open to playful, unexpected connections.',
        reversed: 'Watch for flaky energy disguised as charm. Enthusiasm without commitment is just entertainment.',
      },
      career: {
        upright: 'Creative inspiration and good news are on the horizon. A new opportunity will excite you.',
        reversed: 'Make sure enthusiasm is backed by discipline. Ideas need execution to matter.',
      },
      life: {
        upright: 'A spark of creative news is coming. Something will ignite your curiosity and set you on a new path.',
        reversed: 'Don\'t start something you won\'t finish. The world doesn\'t need another abandoned project.',
      },
      ex: {
        upright: 'New romantic curiosity is coming—from unexpected directions. Your interest will be captured by someone or something that reminds you there\'s life beyond this breakup.',
        reversed: 'If they show up with the same old playful-but-uncommitted energy, recognize it for what it is: a pattern, not progress.',
      },
    },
  },
  {
    id: 47,
    name: 'Knight of Wands',
    arcana: 'Minor',
    vibe: 'The Bold Adventurer',
    description: 'Passion, adventure, and impulsive action. Charging forward with confidence and fire.',
    url: '/assets/img/cards/Wands12.jpg',
    past: {
      love: {
        upright: 'A passionate, adventurous lover who swept in like fire. Exciting but intense, with a "here today, gone tomorrow" energy.',
        reversed: 'A hot-and-cold partner who left as quickly as they arrived. All heat, no substance.',
      },
      career: {
        upright: 'Bold professional risks that required courage. You jumped into new territory with confidence.',
        reversed: 'Hasty decisions that backfired. Acting before thinking cost you.',
      },
      life: {
        upright: 'Adventure defined that chapter. Sudden moves, travel, and embracing change as fuel.',
        reversed: 'Aggression and impatience caused damage. You forced things that weren\'t ready.',
      },
      ex: {
        upright: 'They were exciting—maybe the most exciting person you\'ve known. Passionate, spontaneous, magnetic. But fire that burns that hot rarely stays.',
        reversed: 'A hit-and-run relationship. They charged in with intensity and left the moment things required depth. You were a pit stop, not a destination.',
      },
    },
    present: {
      love: {
        upright: 'Passionate energy is present, but it may be impulsive. Someone is charging toward you (or you toward them) with heat but perhaps not planning.',
        reversed: 'Reckless romantic energy that\'s more destructive than exciting. Passion without direction is just chaos.',
      },
      career: {
        upright: 'Bold action is required. Take the leap, make the move, trust your fire. Fortune favors the brave.',
        reversed: 'Slow down. Your impulsiveness is creating more problems than it solves.',
      },
      life: {
        upright: 'Adventure is calling. A trip, a move, a bold change of scenery might be exactly what you need.',
        reversed: 'Destructive energy. You\'re moving, but you\'re leaving scorched earth behind you.',
      },
      ex: {
        upright: 'They might come charging back—passionate, intense, saying all the right things. But remember: Knights of Wands are better at arrivals than commitments. They leave as fast as they come.',
        reversed: 'Hot-cold-hot-cold. They show up when they want something, disappear when they\'re satisfied. You\'re not their partner; you\'re their convenience.',
      },
    },
    future: {
      love: {
        upright: 'A passionate encounter is coming. It will be exciting, but may not be lasting. Enjoy the fire without expecting permanence.',
        reversed: 'Fast in, fast out. Someone exciting will appear but struggle to stay. Don\'t mistake intensity for depth.',
      },
      career: {
        upright: 'Bold action will pay off. When opportunity strikes, move quickly and confidently.',
        reversed: 'Temper your enthusiasm with strategy. Speed without direction leads to crashes.',
      },
      life: {
        upright: 'Adventure awaits. Be ready to move when the fire ignites.',
        reversed: 'Impulsiveness will cost you. Think before you leap into flames.',
      },
      ex: {
        upright: 'If they return, it will be passionate and fast-moving. The question isn\'t whether they can sweep you off your feet—it\'s whether they can stay.',
        reversed: 'They\'ll keep riding in and out of your life as long as you let them. You\'re a stop on their adventure, not the destination. Is that enough for you?',
      },
    },
  },
  {
    id: 48,
    name: 'Queen of Wands',
    arcana: 'Minor',
    vibe: 'The Magnetic Muse',
    description: 'Confidence, charisma, and radiant energy. A warm presence that draws others like moths to flame.',
    url: '/assets/img/cards/Wands13.jpg',
    past: {
      love: {
        upright: 'You were magnetic and confident in that relationship. You felt sexy, powerful, and desired.',
        reversed: 'Jealousy or competition dimmed your light. You felt threatened by your partner\'s energy or they felt threatened by yours.',
      },
      career: {
        upright: 'You led with charisma and warmth. People were drawn to follow you because of your energy.',
        reversed: 'Your fire was used to exclude rather than include. Power plays and rivalry.',
      },
      life: {
        upright: 'You radiated optimism and warmth. People genuinely wanted to be in your presence.',
        reversed: 'Your spark dimmed. Exhaustion or self-doubt stole your natural glow.',
      },
      ex: {
        upright: 'You were your best self in that relationship—or at least you felt that way. Confident, attractive, powerful. Part of grieving is grieving who you were with them.',
        reversed: 'Their presence either diminished your light or you diminished theirs. One sun was always trying to outshine the other.',
      },
    },
    present: {
      love: {
        upright: 'Your confidence is magnetic right now. You don\'t need anyone—and that independence makes you incredibly attractive.',
        reversed: 'Jealousy, burnout, or insecurity is dimming your natural radiance. Recharge your fire.',
      },
      career: {
        upright: 'You\'re the center of attention professionally. Your charisma is opening doors and attracting opportunities.',
        reversed: 'Your energy is being drained by others, or you\'re not stepping into your full power.',
      },
      life: {
        upright: 'You\'re radiating warmth and people are drawn to you. Own your magnetic presence.',
        reversed: 'Your creativity is blocked by ego or insecurity. The sun is behind clouds.',
      },
      ex: {
        upright: 'Your glow is back. That radiance you thought depended on them? It was always yours. They just reflected light that originated from you.',
        reversed: 'Don\'t let their absence steal your fire. The jealousy, the comparison, the need to prove you\'re doing better—it\'s exhausting your light.',
      },
    },
    future: {
      love: {
        upright: 'You\'ll be irresistible. Your confidence and warmth will attract exactly the kind of attention you deserve.',
        reversed: 'Don\'t let the need to prove something drive your healing. Your glow should be for you, not for their regret.',
      },
      career: {
        upright: 'Your charisma will open significant doors. Step fully into your magnetic power.',
        reversed: 'Protect your energy. Not everyone deserves access to your warmth and light.',
      },
      life: {
        upright: 'Confidence, vitality, and magnetism are your future. The Queen rises.',
        reversed: 'Tend your own flame first. You can\'t light up a room if you\'ve exhausted yourself.',
      },
      ex: {
        upright: 'They\'re going to see you thriving—radiant, confident, glowing. And yes, they\'ll probably regret what they lost. But by then, you won\'t care.',
        reversed: 'If your healing is about showing them what they\'re missing, you\'re still performing for an audience of one. Real radiance doesn\'t need their eyes.',
      },
    },
  },
  {
    id: 49,
    name: 'King of Wands',
    arcana: 'Minor',
    vibe: 'The Visionary Leader',
    description: 'Bold leadership, entrepreneurship, and commanding presence. The one who shapes reality through sheer will.',
    url: '/assets/img/cards/Wands14.jpg',
    past: {
      love: {
        upright: 'A relationship with a powerful, charismatic leader type. They commanded attention and led with vision.',
        reversed: 'A dominating partner who controlled through force of personality. Their way or the highway.',
      },
      career: {
        upright: 'You led with vision and boldness. You saw outcomes before others and made them happen through sheer will.',
        reversed: 'Arrogance or impatience undermined your leadership. You expected everyone to move at your speed.',
      },
      life: {
        upright: 'You had the power to manifest your vision into reality. Bold leadership defined that chapter.',
        reversed: 'Your fire became a weapon. You burned bridges with your intensity.',
      },
      ex: {
        upright: 'They were a leader, a force, someone who commanded a room. You were drawn to their power and vision. It was attractive until you realized being with a king can mean always being a subject.',
        reversed: 'They were controlling and called it leadership. Demanding and called it standards. Their vision left no room for yours.',
      },
    },
    present: {
      love: {
        upright: 'You\'re taking back your power. You\'re the leader of your own romantic life now. No more following; you set the direction.',
        reversed: 'Your intensity is pushing people away. Confidence is attractive; dominance is not.',
      },
      career: {
        upright: 'You see the path to success clearly. Lead with vision and others will follow.',
        reversed: 'Arrogance is undermining your effectiveness. Lead with fire, yes—but not at the cost of everyone around you.',
      },
      life: {
        upright: 'You have the power to manifest whatever you want through vision and will. Use it wisely.',
        reversed: 'Your will has become a weapon. Power without wisdom burns everything, including yourself.',
      },
      ex: {
        upright: 'You\'re the boss of your own desire now. No more being led around by their energy. You decide what you want and how to get it.',
        reversed: 'Be careful that your healing doesn\'t turn into hardness. There\'s a difference between claiming your power and becoming closed off to love entirely.',
      },
    },
    future: {
      love: {
        upright: 'You\'ll know exactly what you want in love and refuse to settle for anything less. Your standards are your strength.',
        reversed: 'Confidence is attractive, but tyranny isn\'t. Lead with your heart, not just your fire.',
      },
      career: {
        upright: 'Visionary leadership awaits. You\'ll see what others can\'t and have the power to make it real.',
        reversed: 'Temper ambition with patience. Not everyone can—or should—move at your pace.',
      },
      life: {
        upright: 'Authority, vision, and the big picture are yours to command. The King rises.',
        reversed: 'Power without wisdom destroys. Stay grounded or risk burning your own kingdom.',
      },
      ex: {
        upright: 'You will become the person who doesn\'t need them—someone with vision, purpose, and power that has nothing to do with their validation.',
        reversed: 'If you become hard and controlling in response to being hurt, they\'ve shaped you more than you realize. True power is remaining open despite the wound.',
      },
    },
  },
  // Swords (50-63)
  {
    id: 50,
    name: 'Ace of Swords',
    arcana: 'Minor',
    vibe: 'The Blade of Clarity',
    description: 'Mental clarity, breakthrough insights, truth, new ideas, and intellectual power.',
    url: '/assets/img/cards/Swords01.jpg',
    past: {
      love: {
        upright: 'A moment of brutal clarity cut through confusion. The truth—even if painful—set you free from illusion.',
        reversed: 'Harsh words were used as weapons. Someone wielded truth carelessly, leaving wounds that words shouldn\'t leave.',
      },
      career: {
        upright: 'A breakthrough idea or decisive action changed your professional trajectory. Mental clarity led to success.',
        reversed: 'Poor communication or flawed thinking led to professional setbacks. The blade of logic cut the wrong thing.',
      },
      life: {
        upright: 'A revelation changed your worldview. You saw something clearly for the first time, and you couldn\'t unsee it.',
        reversed: 'Confusion, misinformation, or clouded judgment sent you down the wrong path.',
      },
      ex: {
        upright: 'At some point, the truth became undeniable. You saw them clearly—or they saw you clearly—and that moment of brutal honesty changed everything.',
        reversed: 'Words became knives. Arguments became warfare. Someone said things that can\'t be unsaid, and the wounds from those verbal cuts are still healing.',
      },
    },
    present: {
      love: {
        upright: 'Mental clarity about love is cutting through your confusion. You\'re finally seeing the truth you\'ve been avoiding.',
        reversed: 'Your thinking is clouded, or you\'re using words as weapons. Either clear the fog or put down the sword.',
      },
      career: {
        upright: 'A brilliant strategy or breakthrough idea is forming. Your mind is sharp—use it to cut through professional noise.',
        reversed: 'Your plan has flaws you\'re not seeing. Verify assumptions before committing to action.',
      },
      life: {
        upright: 'Mental clarity is your superpower right now. Truth is your ally, even when it\'s uncomfortable.',
        reversed: 'Overthinking and mental fog are blocking clear judgment. You\'re tangled in thoughts that don\'t serve you.',
      },
      ex: {
        upright: 'The fog is lifting. You\'re starting to see them—and the relationship—with brutal clarity. Some of what you see might hurt, but truth is the only path to real freedom.',
        reversed: 'You\'re either spiraling in confused thoughts about what went wrong, or you\'re sharpening words to wound them with. Neither serves you. Clear your head before you speak or act.',
      },
    },
    future: {
      love: {
        upright: 'A conversation or realization is coming that will provide absolute clarity. The truth will cut through remaining confusion.',
        reversed: 'Words could wound if you\'re not careful. Sharp honesty delivered without compassion can do permanent damage.',
      },
      career: {
        upright: 'A breakthrough moment is approaching. Your ideas will cut through competition and stand out.',
        reversed: 'Harsh feedback or difficult conversations lie ahead. Prepare yourself mentally, and don\'t react defensively.',
      },
      life: {
        upright: 'Absolute clarity is coming. The fog will lift, and you\'ll see your path with crystalline precision.',
        reversed: 'Don\'t make cutting decisions until your thinking clears. Acting on clouded judgment creates regret.',
      },
      ex: {
        upright: 'A final clarity is coming—either through a conversation that finally makes sense of things, or through your own breakthrough realization. When it arrives, you\'ll know it\'s over. And that knowing will set you free.',
        reversed: 'If you reach out while your mind is clouded with anger or desperation, you\'ll say things you can\'t take back. Wait until the fog lifts. Clarity first, communication second.',
      },
    },
  },
  {
    id: 51,
    name: 'Two of Swords',
    arcana: 'Minor',
    vibe: 'The Stalemate',
    description: 'Indecision, stalemate, difficult choices, blocked emotions, and avoidance.',
    url: '/assets/img/cards/Swords02.jpg',
    past: {
      love: {
        upright: 'Communication reached a standoff. Neither would budge, and the silence became its own statement.',
        reversed: 'A decision was forced before you were ready, or you broke the stalemate clumsily, leaving damage in the wake.',
      },
      career: {
        upright: 'Professional negotiations reached a deadlock. Stubbornness on both sides prevented resolution.',
        reversed: 'Analysis paralysis caused you to miss a window of opportunity. Overthinking killed momentum.',
      },
      life: {
        upright: 'You wore a blindfold to avoid seeing a truth you already knew. Avoidance felt easier than deciding.',
        reversed: 'Being forced to choose before you were ready left confusion and regret in its wake.',
      },
      ex: {
        upright: 'The relationship hit a wall where neither of you would speak the truth. That silence wasn\'t peace—it was avoidance. The real conversation never happened.',
        reversed: 'At some point, one of you forced a decision the other wasn\'t ready for. The stalemate broke, but not cleanly. The unfinished quality of that ending still haunts you.',
      },
    },
    present: {
      love: {
        upright: 'You\'re in a standoff—either with another person or within yourself. The truth is being blocked by both sides.',
        reversed: 'The blindfold is slipping. A difficult truth you\'ve been avoiding is forcing its way into consciousness.',
      },
      career: {
        upright: 'Professional indecision has you paralyzed. You\'re weighing options so carefully that nothing moves forward.',
        reversed: 'The deadlock is breaking. You\'re being forced to make a call despite uncertainty.',
      },
      life: {
        upright: 'You\'re avoiding a decision you know needs to be made. The swords are balanced, but they can\'t stay that way forever.',
        reversed: 'Information overload is overwhelming you. Now that you see everything, choosing feels impossible.',
      },
      ex: {
        upright: 'You\'re stuck—unable to move forward, unwilling to go back. The stalemate isn\'t protecting you; it\'s prolonging pain. A decision is required, even if it\'s painful.',
        reversed: 'You\'re finally starting to see what you didn\'t want to see. The blindfold is coming off, and the truth beneath it is uncomfortable. But at least now you can choose with clear eyes.',
      },
    },
    future: {
      love: {
        upright: 'The limbo won\'t last. Eventually, you\'ll be forced to decide—either to fully move on or to try again. No decision is still a decision.',
        reversed: 'The stalemate will break, but possibly not on your terms. Someone or something will force the issue.',
      },
      career: {
        upright: 'A decision must be made. The fence you\'re sitting on is about to give way.',
        reversed: 'If you don\'t choose, circumstances will choose for you. Take back your agency.',
      },
      life: {
        upright: 'The crossroads demands an answer. You can delay, but you can\'t avoid the choice forever.',
        reversed: 'Clarity is coming, but the path to it will be uncomfortable. You\'ll have to look at things you\'ve been avoiding.',
      },
      ex: {
        upright: 'You can\'t stay in this holding pattern forever. At some point, you\'ll have to put down the swords, remove the blindfold, and actually choose—to fight for it, to walk away, or to accept the loss. Indecision is its own kind of torture.',
        reversed: 'The universe is going to force your hand if you don\'t act. A conversation, a revelation, or a closing door will make the choice for you. Better to choose consciously than have it chosen for you.',
      },
    },
  },
  {
    id: 52,
    name: 'Three of Swords',
    arcana: 'Minor',
    vibe: "The Heart's Surgery",
    description: 'Heartbreak, sorrow, grief, painful truth, and emotional release.',
    url: '/assets/img/cards/Swords03.jpg',
    past: {
      love: {
        upright: 'Heartbreak pierced you—betrayal, rejection, or a truth that shattered what you believed. The pain was real and deep.',
        reversed: 'You buried the heartbreak instead of processing it. That unhealed wound is still affecting you.',
      },
      career: {
        upright: 'A professional rejection, betrayal, or failure cut deep into your sense of worth.',
        reversed: 'You never fully processed a career disappointment. The hurt was suppressed, not healed.',
      },
      life: {
        upright: 'A painful realization pierced through your illusions. The surgery was brutal but necessary.',
        reversed: 'Old grief was never properly mourned. It\'s been leaking into your present ever since.',
      },
      ex: {
        upright: 'You know this card. You\'ve felt these swords through your heart. The betrayal, the loss, the moment when you realized it was really over—that pain was among the worst you\'ve ever known.',
        reversed: 'You thought if you didn\'t feel it, it would go away. You shoved the grief down, distracted yourself, pretended you were fine. But buried pain doesn\'t decompose—it just waits.',
      },
    },
    present: {
      love: {
        upright: 'You are in active heartbreak. The swords are still in your chest, and every breath reminds you. This is the storm before the clearing.',
        reversed: 'You\'re refusing to feel the pain, numbing it with distraction or denial. Healing can\'t start until you acknowledge the wound.',
      },
      career: {
        upright: 'A painful professional truth is surfacing. The disappointment is real and needs to be faced, not ignored.',
        reversed: 'You\'re suppressing work-related grief or disappointment. It\'s leaking into other areas of your life.',
      },
      life: {
        upright: 'Grief is present and demanding acknowledgment. Let the tears come—they\'re the body\'s way of releasing what the heart can\'t hold.',
        reversed: 'You\'re numbing yourself to avoid feeling. Alcohol, distraction, forced positivity—none of it is actually healing. It\'s just delay.',
      },
      ex: {
        upright: 'You\'re in it—the raw, gasping, can\'t-believe-this-is-real heartbreak. This is supposed to hurt. Don\'t rush through it. Don\'t shame yourself for crying. This is your heart doing exactly what it needs to do.',
        reversed: 'Pretending you\'re over it when you\'re not isn\'t strength—it\'s avoidance. The "I\'m fine" performance is exhausting, and your heart knows the truth even if your mouth is lying.',
      },
    },
    future: {
      love: {
        upright: 'Pain is coming that will ultimately serve your healing. The truth may hurt, but it will also set you free.',
        reversed: 'If you keep avoiding this grief, it will resurface later—probably at the worst possible time.',
      },
      career: {
        upright: 'A difficult professional truth is approaching. It will hurt, but facing it is the only path to moving forward.',
        reversed: 'The painful conversation you\'re avoiding won\'t get easier. Delay only prolongs suffering.',
      },
      life: {
        upright: 'The surgery must be completed for healing to begin. The remaining pain needs to be felt, not fled.',
        reversed: 'The wound won\'t close while you keep picking at it—or while you refuse to look at it at all.',
      },
      ex: {
        upright: 'The pain will peak and then begin to subside. You\'re not dying—you\'re being reborn. The swords will eventually fall out, and the scars will heal into wisdom.',
        reversed: 'If you keep avoiding this heartbreak, it will follow you into your next relationship, your next year, your next decade. You can pay now or pay later, but grief always collects its due.',
      },
    },
  },
  {
    id: 53,
    name: 'Four of Swords',
    arcana: 'Minor',
    vibe: 'The Mental Sanctuary',
    description: 'Rest, recovery, contemplation, mental retreat, and healing solitude.',
    url: '/assets/img/cards/Swords04.jpg',
    past: {
      love: {
        upright: 'A period of separation or no-contact allowed necessary healing. That space, though painful, was exactly what you needed.',
        reversed: 'You were pulled back into the relationship or drama before you finished healing. The rest was interrupted.',
      },
      career: {
        upright: 'A sabbatical, pause, or period of reduced intensity allowed professional recovery and clarity.',
        reversed: 'Burnout accumulated because you didn\'t take the rest you needed. The battery was never properly recharged.',
      },
      life: {
        upright: 'Retreat and contemplation served you well. Silence was where you found yourself again.',
        reversed: 'Isolation extended too long and became stagnation. Rest turned into avoidance.',
      },
      ex: {
        upright: 'The no-contact period—whether you chose it or it was forced—gave you space to breathe. That sanctuary was necessary for your survival.',
        reversed: 'Just when you were starting to find peace, something dragged you back into the chaos. You never got to fully rest before round two began.',
      },
    },
    present: {
      love: {
        upright: 'Withdrawal and silence are protecting your mental health. This boundary is necessary, not cruel.',
        reversed: 'You want rest but your mind won\'t stop. Anxiety and obsession are preventing the peace you desperately need.',
      },
      career: {
        upright: 'Step away from the noise. Your best thinking happens in quiet. Take the mental break before it takes itself.',
        reversed: 'You\'re being forced to perform before you\'ve recovered. The demand is coming before the capacity.',
      },
      life: {
        upright: 'This is a time for mental hygiene—meditation, quiet, retreat. Your nervous system needs sanctuary.',
        reversed: 'Exhaustion is real but rest won\'t come. Your mind refuses to quiet even though your body is begging.',
      },
      ex: {
        upright: 'The silence right now isn\'t giving up—it\'s surviving. You need space from them, from the situation, from the constant mental replaying. Rest is healing.',
        reversed: 'Your mind won\'t stop torturing you. You replay conversations at 3 AM, analyze every interaction, and can\'t find the off switch. This isn\'t thinking—it\'s suffering disguised as processing.',
      },
    },
    future: {
      love: {
        upright: 'A period of peace and recovery is coming. The mental detox you need will arrive.',
        reversed: 'Drama may interrupt your healing before it\'s complete. Guard your peace fiercely.',
      },
      career: {
        upright: 'A period of recovery and strategic planning awaits. The intensity will give way to reflection.',
        reversed: 'Rest will be interrupted by demands. Prepare for an unexpected return to action before you\'re ready.',
      },
      life: {
        upright: 'Mental sanctuary awaits. The noise will quiet, and clarity will emerge from stillness.',
        reversed: 'True rest requires actually stopping—not just pausing between rounds of chaos.',
      },
      ex: {
        upright: 'The obsessive thinking will eventually quiet. The constant mental loop about them will slow, then stop. Peace is coming.',
        reversed: 'If you don\'t actively protect your mental peace, something—or someone—will invade it. Block what needs blocking. Your recovery depends on boundaries.',
      },
    },
  },
  {
    id: 54,
    name: 'Five of Swords',
    arcana: 'Minor',
    vibe: 'The Hollow Victory',
    description: 'Conflict, defeat, winning at all costs, tension, and hollow triumph.',
    url: '/assets/img/cards/Swords05.jpg',
    past: {
      love: {
        upright: 'A fight where words became weapons and ego destroyed connection. Someone "won," but both lost.',
        reversed: 'You walked away from a battle that wasn\'t worth fighting. Surrendering the argument saved your dignity.',
      },
      career: {
        upright: 'Professional conflict left casualties—relationships damaged, trust broken. You may have won, but the cost was steep.',
        reversed: 'You chose peace over being right in a work conflict. That took more strength than fighting would have.',
      },
      life: {
        upright: 'A conflict where ego triumphed over connection. You got what you wanted, but it felt empty.',
        reversed: 'You realized the victory wasn\'t worth the damage required to achieve it. Walking away was the real win.',
      },
      ex: {
        upright: 'One of you "won" the breakup—got the last word, came out looking better, hurt the other more effectively. But victory in heartbreak isn\'t actually victory. It\'s just wreckage with a ribbon on it.',
        reversed: 'At some point, you decided the war wasn\'t worth it. You put down your sword and walked away. It felt like losing then, but it was actually the beginning of peace.',
      },
    },
    present: {
      love: {
        upright: 'Competition and conflict are dominating. Someone is trying to "win" the breakup, the argument, the narrative. This is ego, not love.',
        reversed: 'The fighting is ending. One or both of you is choosing peace over proving a point.',
      },
      career: {
        upright: 'Workplace conflict is getting ugly. Someone is playing to win at any cost—watch your back and pick your battles.',
        reversed: 'You\'re realizing a toxic competition isn\'t worth your peace. Stepping back from the fight.',
      },
      life: {
        upright: 'Choose your battles wisely. Not every argument deserves your energy. Some fights leave everyone wounded, even the "winner."',
        reversed: 'The drama is fading. You\'re ready to put down the swords and walk away from conflict that serves no one.',
      },
      ex: {
        upright: 'Stop trying to win the breakup. Stop keeping score of who\'s doing better, who moved on first, who looks happier on social media. This isn\'t a competition—and if it were, nobody actually wins.',
        reversed: 'You\'re choosing peace over the satisfaction of being right. That\'s not weakness; it\'s wisdom. Let them tell whatever story they need to. You don\'t need to correct it to heal.',
      },
    },
    future: {
      love: {
        upright: 'Even if you "win"—get them back, prove your point, come out on top—the victory will feel hollow. Is that really what you want?',
        reversed: 'You\'ll choose to walk away from a battle you could have won. That decision will feel like loss initially but lead to peace.',
      },
      career: {
        upright: 'Be careful what you fight for. Some professional victories cost more than they\'re worth.',
        reversed: 'Peace will come through releasing the need to win, not through conquest.',
      },
      life: {
        upright: 'Winning at all costs leaves you alone with your trophy and no one to celebrate with.',
        reversed: 'Forgiveness and moving on will serve you far better than revenge or vindication ever could.',
      },
      ex: {
        upright: 'The "revenge glow-up," the perfect new partner, the life that makes them jealous—none of it will fill the void. Healing doesn\'t come from winning against them. It comes from no longer needing to compete.',
        reversed: 'You will eventually choose peace over justice, healing over revenge. When you do, you\'ll finally be free.',
      },
    },
  },
  {
    id: 55,
    name: 'Six of Swords',
    arcana: 'Minor',
    vibe: 'The Rite of Passage',
    description: 'Transition, moving forward, recovery, leaving difficulty behind, and calmer waters.',
    url: '/assets/img/cards/Swords06.jpg',
    past: {
      love: {
        upright: 'You made the difficult choice to leave turbulent waters behind. The crossing was hard, but you did it.',
        reversed: 'You tried to move on, but something kept pulling you back. The escape was incomplete.',
      },
      career: {
        upright: 'A necessary professional transition led you from chaos to stability. The move was worth it.',
        reversed: 'A career change didn\'t go smoothly. The transition created new problems of its own.',
      },
      life: {
        upright: 'You left a difficult situation behind. The journey was uncomfortable, but it led somewhere better.',
        reversed: 'You carried too much baggage into your supposed fresh start. The old problems followed.',
      },
      ex: {
        upright: 'You got in the boat. You started rowing away from the storm. Even though you could still see the shore you were leaving, you kept going. That took everything you had.',
        reversed: 'Every time you tried to leave, something pulled you back—a text, a memory, your own fear. The escape attempt failed more than once before you finally made it out.',
      },
    },
    present: {
      love: {
        upright: 'You\'re in transition—leaving difficult emotional territory for calmer waters. The baggage is still with you, but you\'re moving.',
        reversed: 'Your body is moving forward but your heart is still anchored to the past. You can\'t get to calmer waters while looking backward.',
      },
      career: {
        upright: 'The worst turbulence is behind you. You\'re moving toward a more stable professional situation.',
        reversed: 'The transition is bumpy. Complications and delays are frustrating your escape from the old situation.',
      },
      life: {
        upright: 'You\'re leaving the storm behind. The future is uncertain, but it\'s more peaceful than what you\'re leaving.',
        reversed: 'You\'re carrying old drama into new situations. The baggage needs to be dropped, not just relocated.',
      },
      ex: {
        upright: 'You\'re in the boat, moving toward recovery. It doesn\'t feel like victory yet—you\'re still carrying the swords, still feeling the weight. But the water is getting calmer. You\'re getting there.',
        reversed: 'Every time you try to move on, something pulls you back. A text from them, a memory, your own hope. You\'re rowing in circles instead of toward the other shore.',
      },
    },
    future: {
      love: {
        upright: 'Calmer waters are ahead. You will reach a place of emotional peace, away from the turbulence you\'re leaving.',
        reversed: 'Unfinished business may drag you back before you complete the crossing. Cut the anchor.',
      },
      career: {
        upright: 'A transition to a better professional environment is coming. The passage may be uncomfortable, but the destination is worth it.',
        reversed: 'The move forward will have complications. Prepare for unexpected obstacles in your transition.',
      },
      life: {
        upright: 'Relief is approaching. The mental peace you\'re seeking is on the other shore.',
        reversed: 'You won\'t find peace by changing locations while carrying the same weight. Drop it to cross.',
      },
      ex: {
        upright: 'You will reach the other side. The day will come when you wake up and realize the storm is behind you, the water is calm, and you survived. That day is coming.',
        reversed: 'If you keep looking back, you\'ll never reach the other shore. The past is trying to anchor you in place. Cut the rope.',
      },
    },
  },
  {
    id: 56,
    name: 'Seven of Swords',
    arcana: 'Minor',
    vibe: 'The Lone Wolf',
    description: 'Deception, strategy, sneaking, betrayal, and working behind the scenes.',
    url: '/assets/img/cards/Swords07.jpg',
    past: {
      love: {
        upright: 'Deception, secrets, or emotional dishonesty poisoned the connection. Someone wasn\'t being fully honest.',
        reversed: 'The lies were eventually exposed. Someone got caught, and trust collapsed.',
      },
      career: {
        upright: 'You used strategy and discretion to get ahead—working smarter rather than through direct confrontation.',
        reversed: 'Professional deception was uncovered. Trust was broken when hidden agendas came to light.',
      },
      life: {
        upright: 'You handled a situation with strategic thinking rather than direct confrontation. Discretion served you.',
        reversed: 'Shortcuts and half-truths eventually caught up with you. Deception has diminishing returns.',
      },
      ex: {
        upright: 'There were lies—maybe small ones, maybe devastating ones. Secrets, hidden agendas, emotional manipulation. The connection was built on ground that wasn\'t solid.',
        reversed: 'Eventually, the truth came out. The affair was discovered. The manipulation was named. The mask slipped. Whatever they were hiding, you finally saw it.',
      },
    },
    present: {
      love: {
        upright: 'Someone is being deceptive—either you\'re hiding your true feelings, or you\'re being deceived. This includes stalking their social media while pretending not to care.',
        reversed: 'Secrets are surfacing. The hidden truth is forcing its way into the light.',
      },
      career: {
        upright: 'Strategic thinking serves you, but know the line between discretion and deception. Don\'t show your full hand, but don\'t lie.',
        reversed: 'Someone\'s hidden agenda is being exposed—possibly yours. Time to decide between transparency and getting caught.',
      },
      life: {
        upright: 'Indirect approaches may serve you better than direct confrontation right now. Use strategy, but stay ethical.',
        reversed: 'Your old tricks aren\'t working anymore. The situation is demanding straightforward honesty.',
      },
      ex: {
        upright: 'Be honest with yourself: are you playing games? Checking their social media, crafting casual texts designed to provoke a reaction, pretending you don\'t care while obsessing? That\'s sneaking, not healing.',
        reversed: 'The truth is coming out—maybe about what really happened, maybe about how you really feel. Secrets you\'ve been keeping (even from yourself) are surfacing.',
      },
    },
    future: {
      love: {
        upright: 'Deception will be revealed. Trust may be impossible to rebuild once you see what was hidden.',
        reversed: 'The time for confessions is approaching. Hidden truths will finally surface.',
      },
      career: {
        upright: 'Strategy will serve you, but be careful not to cross into deception. The line matters.',
        reversed: 'Hidden agendas—yours or others\'—will be exposed. Prepare for forced transparency.',
      },
      life: {
        upright: 'Be careful who you trust. Not everyone is showing you their true face.',
        reversed: 'The era of sneaking around is ending. One way or another, truth is coming.',
      },
      ex: {
        upright: 'More truth will come out about what really happened in that relationship. Whether you discover their deception or recognize your own, clarity on who was real and who wasn\'t is coming.',
        reversed: 'The game-playing will eventually exhaust you. The stalking, the strategic posting, the trying to "win"—it\'s all going to feel pointless. When you\'re ready to be honest, healing can actually begin.',
      },
    },
  },
  {
    id: 57,
    name: 'Eight of Swords',
    arcana: 'Minor',
    vibe: 'The Mental Cage',
    description: 'Self-imposed restriction, feeling trapped, victim mentality, and mental imprisonment.',
    url: '/assets/img/cards/Swords08.jpg',
    past: {
      love: {
        upright: 'You felt trapped in a relationship you believed you couldn\'t leave. The prison felt real, even if the bars were partly imagined.',
        reversed: 'You eventually realized the cage was largely self-imposed and found the courage to walk out.',
      },
      career: {
        upright: 'You felt stuck in a professional role, limited by rules and expectations that may have been more flexible than you believed.',
        reversed: 'You broke free from a limiting professional mindset and discovered you had more options than you thought.',
      },
      life: {
        upright: 'You believed you were trapped with no options when alternatives actually existed. The blindfold was self-tied.',
        reversed: 'The moment of realization came—the cage doors were never locked. You could have walked out at any time.',
      },
      ex: {
        upright: 'You felt unable to leave even when you knew you should. Fear, dependency, or the belief that you had no options kept you bound to something that wasn\'t working.',
        reversed: 'At some point, you realized the prison you felt trapped in was largely mental. The moment you believed escape was possible, it became possible.',
      },
    },
    present: {
      love: {
        upright: 'You\'re trapped in your own head—overthinking, catastrophizing, believing you have fewer options than you do.',
        reversed: 'The blindfold is slipping. You\'re starting to see that you have more power and choices than you believed.',
      },
      career: {
        upright: 'Imposter syndrome or learned helplessness has you believing you\'re stuck. You\'re limited by rules that may not actually exist.',
        reversed: 'You\'re finding loopholes and possibilities you didn\'t see before. Agency is returning.',
      },
      life: {
        upright: 'The prison is mental. The swords around you are real, but you\'re not actually bound. Take off the blindfold.',
        reversed: 'Liberation is beginning. The fog of learned helplessness is clearing.',
      },
      ex: {
        upright: 'You feel trapped by your feelings for them—unable to move on, unable to stop thinking about them, unable to imagine a future without the pain. But here\'s the truth: the bindings are loose. You could walk away from this mental prison if you believed you could.',
        reversed: 'You\'re starting to see it: the cage was your own thoughts. The "I can\'t live without them" was a story, not a fact. Freedom is becoming visible.',
      },
    },
    future: {
      love: {
        upright: 'You will realize the prison has been mental all along. When you believe escape is possible, it will become possible.',
        reversed: 'Freedom comes when you stop believing in your own limitations. The breakthrough is approaching.',
      },
      career: {
        upright: 'You\'ll discover the professional restrictions you feared weren\'t as solid as they seemed. Options will appear.',
        reversed: 'The way out becomes obvious once you stop staring at the bars and start looking for gaps.',
      },
      life: {
        upright: 'Mental liberation approaches. The walls that seemed so solid will reveal themselves as paper.',
        reversed: 'You\'ll break free, but first you need to believe escape is possible. The prison requires your belief to hold you.',
      },
      ex: {
        upright: 'The day will come when you realize you were never actually trapped by them or by the breakup. You\'ve been trapped by your own thoughts about it. When that realization hits, you\'ll walk out of a prison that was never locked.',
        reversed: 'The victim story—"I\'ll never love again," "They destroyed me," "I have no choice but to suffer"—will eventually run out of power. The moment you stop believing it, you\'ll be free.',
      },
    },
  },
  {
    id: 58,
    name: 'Nine of Swords',
    arcana: 'Minor',
    vibe: 'The Night Terror',
    description: 'Anxiety, nightmares, worry, despair, and mental anguish.',
    url: '/assets/img/cards/Swords09.jpg',
    past: {
      love: {
        upright: 'Sleepless nights, anxiety spirals, and mental anguish consumed you after heartbreak. Those were the darkest hours.',
        reversed: 'You survived the nightmare period. The worst of the anxiety eventually passed.',
      },
      career: {
        upright: 'Professional stress became all-consuming. Work worries infiltrated every thought, every dream, every waking moment.',
        reversed: 'You found ways to manage overwhelming pressure after a dark period of professional anxiety.',
      },
      life: {
        upright: 'A period of intense mental suffering tested your limits. The nights were long and the thoughts were merciless.',
        reversed: 'You woke from the nightmare and realized fear had been your real enemy all along.',
      },
      ex: {
        upright: 'The 3 AM spiral. The replaying of every conversation. The guilt, the "what ifs," the anxiety that wouldn\'t let you sleep. You know those nights—when the pain felt like it might actually kill you.',
        reversed: 'The worst of the mental torture eventually passed. You survived thoughts you were sure would destroy you.',
      },
    },
    present: {
      love: {
        upright: 'You\'re in the spiral—replaying arguments, imagining worst-case scenarios, unable to quiet the anxious thoughts about what went wrong and what will happen next.',
        reversed: 'The anxiety is beginning to lift. You\'re reaching out for support and realizing some of your fears were exaggerated.',
      },
      career: {
        upright: 'Work stress is catastrophic in your mind. You\'re blowing things out of proportion, and the worry is consuming you.',
        reversed: 'The worst is passing. You\'re finding coping strategies and realizing the situation isn\'t as dire as your anxiety suggested.',
      },
      life: {
        upright: 'Your 3 AM thoughts are lying to you. The catastrophe feels real, but it\'s amplified by darkness and exhaustion. Things are rarely as bad as the night terror suggests.',
        reversed: 'The darkness is lifting. You\'re starting to see daylight, and hope is returning.',
      },
      ex: {
        upright: 'You\'re living in the 3 AM spiral. Replaying every argument, every red flag you missed, every moment you wish you could take back. Your mind is torturing you, and sleep is impossible. This is hell, but you need to know: it\'s temporary.',
        reversed: 'The nightmare is losing its grip. You\'re starting to have moments—hours, even—where you don\'t think about them. The obsessive thoughts are weakening.',
      },
    },
    future: {
      love: {
        upright: 'You will face what haunts you, and when you do, you\'ll discover the monster was smaller than its shadow. The fear is worse than the reality.',
        reversed: 'Relief is coming. The anxious spiral will eventually exhaust itself and stop.',
      },
      career: {
        upright: 'Professional anxiety may spike, but it will pass. The future isn\'t as terrifying as your worried mind paints it.',
        reversed: 'You\'ll realize you were catastrophizing. The actual situation is more manageable than your fears suggested.',
      },
      life: {
        upright: 'The time is coming to face what haunts you. The shadow only shrinks when you turn on the light.',
        reversed: 'Dawn is approaching. The night terror is almost over.',
      },
      ex: {
        upright: 'The day will come when you sleep through the night without thinking of them. When you wake up and they\'re not the first thing on your mind. The nightmare will end. You just have to survive until morning.',
        reversed: 'The anxiety and obsession will eventually lose their power over you. Not because anything external changes, but because your nervous system will finally believe that you\'re safe without them.',
      },
    },
  },
  {
    id: 59,
    name: 'Ten of Swords',
    arcana: 'Minor',
    vibe: 'The Finality',
    description: 'Rock bottom, painful ending, betrayal, complete defeat, and the necessity of release.',
    url: '/assets/img/cards/Swords10.jpg',
    past: {
      love: {
        upright: 'Rock bottom. Complete devastation. The relationship didn\'t just end—it was destroyed. There was no saving it.',
        reversed: 'You survived something you weren\'t sure you could survive. The recovery from that devastation has been slow but real.',
      },
      career: {
        upright: 'A total professional collapse—sudden job loss, project failure, or career crisis that felt like the floor dropped.',
        reversed: 'You\'ve been rising from the ashes of a professional disaster. The worst already happened, and you\'re still here.',
      },
      life: {
        upright: 'You hit absolute bottom. There was nowhere left to fall, which meant there was only one direction to go.',
        reversed: 'The long crawl back to life after devastating loss. You\'re further from rock bottom than you were.',
      },
      ex: {
        upright: 'This was the death blow. Not a fight, not a break—an ending so complete it felt like a kind of murder. Ten swords in the back. Betrayal. Finality. The moment you knew there was no going back.',
        reversed: 'You survived what you thought would kill you. The devastation was complete, but you didn\'t die. You\'re still breathing, still functioning, still—against all odds—alive.',
      },
    },
    present: {
      love: {
        upright: 'This is the final ending. Acceptance is the only option because resistance is futile. It\'s over—completely, utterly over.',
        reversed: 'You\'re trying to resurrect something that is clearly dead. Stop. You\'re poking at a corpse. Let it rest.',
      },
      career: {
        upright: 'A definitive professional ending. There\'s nothing left to fix. The situation is beyond repair.',
        reversed: 'The collapse is happening in slow motion. You might still be able to limit the damage if you act now.',
      },
      life: {
        upright: 'This is rock bottom. The swords are all in. There\'s nowhere further to fall, which means the only direction from here is up.',
        reversed: 'Resisting the ending is prolonging your suffering. What needs to die is already dead—stop trying to breathe life into it.',
      },
      ex: {
        upright: 'Accept it. It\'s over. Not "maybe over," not "we might work it out"—over. The swords are in your back, the sun is setting on this chapter, and the only thing left to do is accept the death so resurrection can eventually begin.',
        reversed: 'You\'re still hoping, still waiting, still checking for signs of life. But this is a corpse you\'re holding onto. Loving a dead thing isn\'t loyalty—it\'s denial.',
      },
    },
    future: {
      love: {
        upright: 'After this darkness, the sun will rise. This ending is making space for something new. The worst will be behind you.',
        reversed: 'The ending is coming whether you accept it or not. You can surrender gracefully or be dragged. Either way, it\'s over.',
      },
      career: {
        upright: 'From the collapse, new possibilities emerge. The destruction clears ground for rebuilding.',
        reversed: 'Don\'t wait for rock bottom. If you can see the fall coming, make changes now.',
      },
      life: {
        upright: 'The only way from here is up. Dawn always follows the darkest night. Resurrection is the ending of endings.',
        reversed: 'The spirit survives the death of the ego, the relationship, the life you thought you\'d have. You will rise.',
      },
      ex: {
        upright: 'This feels like death because it is one—the death of the relationship, the future you imagined, the person you were when you were with them. But death is not the end. After the burial comes resurrection. After rock bottom comes the climb.',
        reversed: 'If you keep refusing to accept the ending, you\'ll stay pinned to the ground with swords in your back. The moment you accept it\'s over is the moment you can finally get up.',
      },
    },
  },
  {
    id: 60,
    name: 'Page of Swords',
    arcana: 'Minor',
    vibe: 'The Curious Spy',
    description: 'Curiosity, mental energy, new ideas, communication, and vigilance.',
    url: '/assets/img/cards/Swords11.jpg',
    past: {
      love: {
        upright: 'Intellectual curiosity and mental spark defined this connection. You were drawn together through ideas and conversation.',
        reversed: 'Gossip, spying, or invasive communication damaged trust. Someone couldn\'t resist gathering information they shouldn\'t have.',
      },
      career: {
        upright: 'A project requiring research and mental agility brought you success. Your curiosity paid off professionally.',
        reversed: 'Bad information, dishonesty, or pretending to know more than you did created professional problems.',
      },
      life: {
        upright: 'Curiosity led you somewhere important. Asking the right questions opened unexpected doors.',
        reversed: 'Being nosy backfired. Information gathering crossed ethical lines and damaged trust.',
      },
      ex: {
        upright: 'You were intellectually curious about each other. The conversations crackled with energy. There was something mentally stimulating about how they made you think.',
        reversed: 'There was too much snooping, too much gossip, too many mind games. Trust eroded through small betrayals of privacy and petty verbal jabs.',
      },
    },
    present: {
      love: {
        upright: 'Curiosity and communication are active—but be careful of being a lurker rather than a participant. Watching isn\'t connecting.',
        reversed: 'Words are being used as weapons. Petty comments, gossiping to friends, social media stalking—this isn\'t processing; it\'s warfare.',
      },
      career: {
        upright: 'Your mental agility is an asset right now. Research thoroughly, ask sharp questions, and gather information strategically.',
        reversed: 'Someone is bluffing or spreading misinformation. Verify facts before acting on what you\'ve heard.',
      },
      life: {
        upright: 'Stay mentally alert. Important information is coming that could change your perspective or options.',
        reversed: 'Petty drama is circling. Someone is talking about you behind your back, or you\'re tempted to engage in gossip yourself.',
      },
      ex: {
        upright: 'The lurking behavior—checking their social media, asking friends for updates, analyzing every crumb of information—isn\'t helping. It\'s just feeding the obsession while giving you zero actual contact.',
        reversed: 'The petty texts, the vague-posting, the gathering intel through mutual friends—stop. This is middle school behavior dressed up as adult heartbreak. You\'re better than this.',
      },
    },
    future: {
      love: {
        upright: 'A message or piece of information is coming—but it may be more curious than romantic. Don\'t over-interpret casual communication.',
        reversed: 'Watch for gossip, misunderstandings, or communication that gets twisted. Clarify before reacting.',
      },
      career: {
        upright: 'New information will spark professional opportunity. Stay curious and keep learning.',
        reversed: 'Don\'t act on news until you\'ve verified it. The information coming may be incomplete or wrong.',
      },
      life: {
        upright: 'High mental energy is coming. Channel it into learning and growth rather than drama and investigation.',
        reversed: 'Mind games and drama may try to draw you in. Stay above it.',
      },
      ex: {
        upright: 'There may be contact—a text, a message, something designed to test your response. It\'ll probably feel more like curiosity than commitment. Respond accordingly.',
        reversed: 'If communication comes, scrutinize it for games. Are they being honest, or just poking to see if you\'ll react? Words are cheap when there\'s no action behind them.',
      },
    },
  },
  {
    id: 61,
    name: 'Knight of Swords',
    arcana: 'Minor',
    vibe: 'The Intellectual Warrior',
    description: 'Speed, ambition, action, assertiveness, and rushing forward.',
    url: '/assets/img/cards/Swords12.jpg',
    past: {
      love: {
        upright: 'A whirlwind romance that moved too fast—intense, exciting, and gone before you caught your breath.',
        reversed: 'Someone charged in and out of your life recklessly. Harsh words were spoken, and damage was done through impulsiveness.',
      },
      career: {
        upright: 'A bold professional move paid off. You charged forward without hesitation and momentum carried you to success.',
        reversed: 'A reckless career decision backfired. Moving too fast without thinking created a crash you\'re still recovering from.',
      },
      life: {
        upright: 'Pure momentum and decisive action carried you through. You didn\'t overthink—you acted.',
        reversed: 'Impulsive action caused collateral damage. The storm of your urgency left debris in its wake.',
      },
      ex: {
        upright: 'They came into your life like a whirlwind—all energy, all intensity, all action. The relationship moved at lightning speed, which felt thrilling until it ended just as quickly.',
        reversed: 'There was recklessness in how this relationship began or ended. Harsh words fired in anger, impulsive decisions made in heat. The speed created damage that slower consideration could have prevented.',
      },
    },
    present: {
      love: {
        upright: 'Fast-moving energy is present—possibly someone charging back into your life with intensity, or a sudden shift in romantic circumstances.',
        reversed: 'All talk, no depth. Someone is saying a lot of words very quickly, but there\'s no emotional substance beneath the speed.',
      },
      career: {
        upright: 'This is a time for bold action and aggressive forward movement. Charge ahead—momentum is your ally.',
        reversed: 'Slow down. Reckless moves will backfire. Check your direction before charging.',
      },
      life: {
        upright: 'Don\'t overthink—act. Your greatest asset right now is momentum and decisive action.',
        reversed: 'Know-it-all energy is alienating people. Your sharp tongue and hasty judgments are causing damage. Soften.',
      },
      ex: {
        upright: 'There may be a sudden, intense return—a dramatic apology, an urgent "we need to talk." But fast energy isn\'t the same as changed behavior. Speed is easy; consistency is hard.',
        reversed: 'The communication is coming fast and furious, but there\'s no depth behind it. Words are easy to fire off; following through is another matter entirely.',
      },
    },
    future: {
      love: {
        upright: 'Fast-moving romantic energy is coming—but speed without depth doesn\'t build lasting connection. Exciting doesn\'t equal sustainable.',
        reversed: 'Someone will talk a big game and fail to follow through. Watch for action, not words.',
      },
      career: {
        upright: 'Speed and ambition will open doors. Strike while the iron is hot, but know your direction.',
        reversed: 'Haste will make waste. A more measured, strategic approach will serve you better than charging blindly.',
      },
      life: {
        upright: 'Rapid movement and urgent decisions are coming. Be prepared to act quickly when the moment arrives.',
        reversed: 'The storm of urgency will pass. Don\'t make permanent decisions based on temporary intensity.',
      },
      ex: {
        upright: 'If they return, it may be in a burst of intensity—dramatic, urgent, overwhelming. But ask yourself: is this genuine change, or just the same impulsive energy that created problems in the first place?',
        reversed: 'Someone who rushes back with words but no sustained action isn\'t worth your time. The pattern of fast-in, fast-out will repeat unless something fundamental has changed.',
      },
    },
  },
  {
    id: 62,
    name: 'Queen of Swords',
    arcana: 'Minor',
    vibe: 'The Sovereign of Truth',
    description: 'Independence, clear boundaries, sharp wit, objectivity, and honest assessment.',
    url: '/assets/img/cards/Swords13.jpg',
    past: {
      love: {
        upright: 'You had to become the "cold one"—protecting your heart with walls, using logic instead of feeling. It was survival.',
        reversed: 'Bitterness or excessive coldness pushed someone away. The walls you built for protection became barriers that hurt you.',
      },
      career: {
        upright: 'Making tough professional calls without emotional attachment served you well. You led with logic and clarity.',
        reversed: 'Being overly critical or harsh damaged professional relationships. Your sharp edges cut things that didn\'t need cutting.',
      },
      life: {
        upright: 'You cut the nonsense out of your life with precision. Clarity and boundaries served you well.',
        reversed: 'Your sharp tongue burned bridges that didn\'t need burning. Honesty without compassion is just cruelty.',
      },
      ex: {
        upright: 'You became sharp to survive. The walls went up, the emotions went down, and you protected yourself with clarity and distance. It wasn\'t cold—it was necessary.',
        reversed: 'Your bitterness or coldness may have contributed to the ending—or made the aftermath more painful than it needed to be. Sharpness can protect, but it can also wound indiscriminately.',
      },
    },
    present: {
      love: {
        upright: 'You\'re in Queen of Swords mode—clear boundaries, rational thinking, protecting yourself with logic and independence. This is healthy.',
        reversed: 'You\'re using logic as a wall to avoid feeling anything. The ice isn\'t protection anymore—it\'s a prison you\'ve built for yourself.',
      },
      career: {
        upright: 'Clear-headed leadership and objective assessment are your strengths right now. Make the tough calls without emotional cloudiness.',
        reversed: 'A harsh, critical atmosphere is developing. Watch your tone—your standards are becoming weaponized.',
      },
      life: {
        upright: 'This is a time for clarity and boundaries. Cut through the confusion with honest assessment and don\'t apologize for seeing clearly.',
        reversed: 'Soften your edges. Not everything requires your sharpest blade. Some situations need compassion more than clarity.',
      },
      ex: {
        upright: 'Your boundaries right now are appropriate. The clarity you\'ve found about them, about the relationship, about yourself—that\'s the sword doing its job. Keep it sharp.',
        reversed: 'There\'s a difference between healthy boundaries and bitter walls. If your "over it" attitude is actually hardened hurt, you\'re not healing—you\'re calcifying. Feeling is part of recovery.',
      },
    },
    future: {
      love: {
        upright: 'You will value your independence and clarity more than anyone\'s attention or approval. That\'s power.',
        reversed: 'Be careful that self-protection doesn\'t become self-isolation. Walls that keep out pain also keep out love.',
      },
      career: {
        upright: 'Your sharp mind will cut through professional problems with precision. Trust your clarity.',
        reversed: 'Criticism may come. Don\'t let it embitter you or sharpen your edges into weapons that hurt indiscriminately.',
      },
      life: {
        upright: 'Independence and clear thinking will guide you forward. The sword is yours to wield wisely.',
        reversed: 'Balance logic with compassion. Truth can be delivered without wounding. Clarity doesn\'t require cruelty.',
      },
      ex: {
        upright: 'You will reach a place of clear, calm assessment. You\'ll be able to see what happened without the distortion of pain, hope, or denial. That clarity will set you free.',
        reversed: 'If you harden completely, you protect yourself from future hurt—but also from future love. The goal isn\'t to become invulnerable. It\'s to become wise about who gets access to your heart.',
      },
    },
  },
  {
    id: 63,
    name: 'King of Swords',
    arcana: 'Minor',
    vibe: 'The Grand Judge',
    description: 'Intellectual mastery, authority, truth, strategic thinking, and objective judgment.',
    url: '/assets/img/cards/Swords14.jpg',
    past: {
      love: {
        upright: 'A relationship dominated by logic, structure, or intellectual authority. Someone led with their mind rather than their heart.',
        reversed: 'Someone used logic as a weapon for control—gaslighting, manipulation, or emotional dominance disguised as rationality.',
      },
      career: {
        upright: 'Strategic thinking and authoritative leadership shaped your professional path. Mental mastery brought success.',
        reversed: 'Corrupt leadership or unethical use of intellectual power affected your career. Someone used their authority to manipulate.',
      },
      life: {
        upright: 'Mastery of logic and strategy served you well. You navigated complexity with your mind as your greatest tool.',
        reversed: 'Intelligence was used for deception or manipulation. The power of a sharp mind was misused.',
      },
      ex: {
        upright: 'There was intellectual respect in this relationship—someone brought structure, logic, and clarity. That authority wasn\'t bad; sometimes relationships need a steady hand.',
        reversed: 'Someone used "logic" to control the narrative. The gaslighting was sophisticated, the manipulation was subtle, and you were made to feel crazy for having feelings at all. Their intelligence was a weapon.',
      },
    },
    present: {
      love: {
        upright: 'Logic and objectivity are needed right now. Set aside emotions temporarily to see the situation clearly and make rational decisions.',
        reversed: 'Emotional detachment is becoming avoidance, or someone is using logic to control or gaslight. Intelligence without compassion is manipulation.',
      },
      career: {
        upright: 'You\'re the master strategist now. Bring order to chaos with clear thinking and authoritative leadership.',
        reversed: 'Corrupt leadership energy is present—intelligence being used to deceive, bully, or control rather than guide.',
      },
      life: {
        upright: 'Seek expert advice. Be the adult in the room. This situation requires mental discipline and objective assessment.',
        reversed: 'Wit is being used to evade truth rather than reveal it. Mental gymnastics don\'t change reality.',
      },
      ex: {
        upright: 'You need to approach this with your head, not your heart—at least for now. Look at the facts: what actually happened, what they actually said, what they actually did. The truth is in the evidence, not the feelings.',
        reversed: 'If they\'re telling you your feelings aren\'t valid, your memory is wrong, or you\'re "too emotional" while they\'re "just being logical"—that\'s not rationality. That\'s gaslighting. Trust your own experience.',
      },
    },
    future: {
      love: {
        upright: 'You will reach a place of clear, objective understanding about love and relationships. Emotional mastery will come through mental clarity.',
        reversed: 'Don\'t let logic completely override your heart. Balance intellectual clarity with emotional truth.',
      },
      career: {
        upright: 'Authority and strategic thinking will lead to professional success. Your mental clarity will be your greatest asset.',
        reversed: 'Power without ethics will eventually face consequences. Intelligence used for manipulation has diminishing returns.',
      },
      life: {
        upright: 'Mental mastery awaits. You will think clearly, act decisively, and navigate complexity with wisdom.',
        reversed: 'Be careful that detachment doesn\'t become disconnection. Logic without heart is incomplete.',
      },
      ex: {
        upright: 'You will reach a place of total clarity about them and the relationship—seeing it objectively, without the distortion of emotion. From that clear vantage point, you\'ll make wise decisions about your future.',
        reversed: 'If you intellectualize your feelings away instead of processing them, you\'ll just transfer the pain elsewhere. You can\'t think your way out of grief—you have to feel it first, then apply wisdom to what remains.',
      },
    },
  },
  // Pentacles (64-77)
  {
    id: 64,
    name: 'Ace of Pentacles',
    arcana: 'Minor',
    vibe: 'The Seed of Manifestation',
    description: 'A new opportunity for material abundance, health, or security. The gift of a tangible beginning.',
    url: '/assets/img/cards/Pents01.jpg',
    past: {
      love: {
        upright: 'A relationship that started with solid promise and tangible potential. It felt grounded from the beginning—real plans, real commitment.',
        reversed: 'A promising start that never materialized into anything real. The foundation was talked about but never built.',
      },
      career: {
        upright: 'A career opportunity or financial decision that laid the groundwork for your current stability. The seed that grew into your profession.',
        reversed: 'A missed opportunity or investment that fell through. The deal that should have been but wasn\'t.',
      },
      life: {
        upright: 'A tangible beginning that set you on a stable path. You planted something real and it grew.',
        reversed: 'You tried to build on unstable ground. The foundation looked solid but wasn\'t.',
      },
      ex: {
        upright: 'The beginning held genuine promise. It wasn\'t just feelings—there were real plans, real building. That foundation was authentic, even if the structure collapsed.',
        reversed: 'The "potential" was always theoretical. They talked about building a future together but never actually laid a single brick. You invested in blueprints that were never going to be built.',
      },
    },
    present: {
      love: {
        upright: 'A new, grounded opportunity for real connection is available. This isn\'t fantasy—it\'s a chance for something tangible and stable.',
        reversed: 'You\'re either too focused on material aspects of romance (status, money) or not grounded enough to recognize real opportunity.',
      },
      career: {
        upright: 'A raise, new job, business opportunity, or solid investment is within reach. The universe is handing you a seed—plant it wisely.',
        reversed: 'A deal is falling through or your financial planning needs attention. Something promised isn\'t materializing.',
      },
      life: {
        upright: 'Your manifestation power is strong. Ideas are becoming reality. Focus on practical steps toward tangible goals.',
        reversed: 'You\'re building on sand. Ground yourself before trying to create anything lasting.',
      },
      ex: {
        upright: 'A new beginning is presenting itself—likely nothing to do with them. This is the universe offering you something solid to build on. Take it.',
        reversed: 'You\'re clinging to the idea of what you were "supposed" to build together instead of accepting the reality that it never solidified. Let go of the blueprint.',
      },
    },
    future: {
      love: {
        upright: 'A real-world romantic opportunity is coming—not just texting, but actual dates, actual commitment, actual building of something together.',
        reversed: 'Be cautious of offers that seem solid but lack substance. Verify before you invest your heart.',
      },
      career: {
        upright: 'A concrete opportunity is approaching. A job offer, contract, or investment that you can actually build on.',
        reversed: 'Don\'t count your money before it\'s in hand. Promised opportunities may not materialize as expected.',
      },
      life: {
        upright: 'Material stability is approaching. The seed you\'ve planted (or are about to plant) will bloom into something real.',
        reversed: 'Ground yourself first. You need a stable foundation before you can receive what\'s coming.',
      },
      ex: {
        upright: 'Something real and solid is coming your way—and it won\'t be them. The universe is preparing something better. Your job is to be ready to receive it.',
        reversed: 'If they return with promises of "building something real this time," ask yourself: what\'s different? Words about foundations aren\'t foundations.',
      },
    },
  },
  {
    id: 65,
    name: 'Two of Pentacles',
    arcana: 'Minor',
    vibe: 'The Great Juggler',
    description: 'Balance, adaptability, and managing multiple priorities. The dance of handling life\'s demands.',
    url: '/assets/img/cards/Pents02.jpg',
    past: {
      love: {
        upright: 'You were constantly juggling—their needs, your needs, work, life, trying to keep all the balls in the air.',
        reversed: 'The juggling act collapsed. You couldn\'t maintain the impossible balance and something dropped.',
      },
      career: {
        upright: 'A time of managing multiple projects, staying flexible, and adapting to changing circumstances.',
        reversed: 'Over-commitment led to crisis. Too many responsibilities crashed into each other.',
      },
      life: {
        upright: 'Life was a dance of constant adaptation. You went with the flow and managed to stay afloat.',
        reversed: 'Chaos ruled. You were reacting to everything and controlling nothing.',
      },
      ex: {
        upright: 'The relationship required constant juggling. You were always trying to balance their instability with your stability. Exhausting.',
        reversed: 'Something had to give, and it did. The impossible balance you were maintaining finally collapsed. Maybe that collapse was a relief.',
      },
    },
    present: {
      love: {
        upright: 'You\'re weighing your options—stay, go, try again, move on. The back-and-forth is real, and you\'re testing the waters.',
        reversed: 'You\'re being pulled in too many directions emotionally. Something has to give or you\'ll drop everything.',
      },
      career: {
        upright: 'Multiple projects and responsibilities require your attention. Stay flexible and prioritize wisely.',
        reversed: 'You\'ve taken on more than you can handle. Your to-do list is becoming your enemy.',
      },
      life: {
        upright: 'Life requires adaptability right now. Go with the flow rather than fighting every wave.',
        reversed: 'The imbalance is taking a toll. You need to simplify before you crash.',
      },
      ex: {
        upright: 'You\'re juggling thoughts about them with the rest of your life. One moment you\'re fine, the next you\'re spiraling. This back-and-forth is normal, but it can\'t be forever.',
        reversed: 'You can\'t keep living this way—one foot in healing, one foot in hoping they come back. Pick a direction or the indecision will pick for you.',
      },
    },
    future: {
      love: {
        upright: 'The balancing act will continue until you consciously choose your priorities. You have to decide what matters most.',
        reversed: 'The juggling will end—either because you get control or because you drop something important.',
      },
      career: {
        upright: 'Your adaptability will be tested, but your flexibility is your strength. Balance will be maintained.',
        reversed: 'Something will drop if you don\'t make hard choices soon. Prioritize before circumstances force you to.',
      },
      life: {
        upright: 'Flexibility will serve you, but don\'t lose your center in all the motion.',
        reversed: 'Simplify now before life simplifies things for you in ways you won\'t like.',
      },
      ex: {
        upright: 'This back-and-forth about them will continue until you decide to end it. The universe won\'t make this choice for you. You have to put down one of the balls deliberately.',
        reversed: 'If you keep trying to juggle "maybe we\'ll work it out" with "moving on," eventually both will crash. Make a choice.',
      },
    },
  },
  {
    id: 66,
    name: 'Three of Pentacles',
    arcana: 'Minor',
    vibe: 'The Master Craftsman',
    description: 'Collaboration, teamwork, and skilled effort. Building something excellent together.',
    url: '/assets/img/cards/Pents03.jpg',
    past: {
      love: {
        upright: 'A relationship where you built something together—shared projects, shared spaces, a sense of being collaborators in life.',
        reversed: 'Poor teamwork destroyed what you were building. Neither of you was listening to the other\'s blueprint.',
      },
      career: {
        upright: 'A successful collaboration where your skills were recognized and valued. Team effort that produced excellent results.',
        reversed: 'A collaboration that failed due to ego clashes, miscommunication, or misaligned visions.',
      },
      life: {
        upright: 'You achieved excellence through collaboration. The power of "we" built something neither could build alone.',
        reversed: 'Cutting corners or poor workmanship weakened what you were creating.',
      },
      ex: {
        upright: 'You were a team once—building a life, making plans, crafting something together. That collaboration was real work, and it mattered.',
        reversed: 'The "team" was an illusion. You were doing all the work while they took credit for the joint project. Or worse—they actively undermined what you were building.',
      },
    },
    present: {
      love: {
        upright: 'You\'re still in negotiation mode—trying to figure out the terms, maybe even trying to rebuild what was broken.',
        reversed: 'You\'re not on the same page, and you know it. The "project" of this relationship has no shared vision.',
      },
      career: {
        upright: 'Your skills are being recognized. A successful team effort or consultation is elevating your work.',
        reversed: 'The collaboration isn\'t working. Nobody\'s listening, the vision is unclear, and the craftsmanship is suffering.',
      },
      life: {
        upright: 'Seek expert advice. Collaborate with others who have skills you lack. Excellence requires teamwork.',
        reversed: 'Rushing the process or working with the wrong people is creating a weak foundation.',
      },
      ex: {
        upright: 'Part of you still wants to "work on things," to go back to the drawing board and try to build it better. That instinct isn\'t wrong—but both builders have to show up.',
        reversed: 'You can\'t build a cathedral with someone who keeps knocking down the walls. Stop trying to collaborate with someone who doesn\'t want to build.',
      },
    },
    future: {
      love: {
        upright: 'You\'ll find a partner who\'s a true collaborator—someone who builds with you, not against you.',
        reversed: 'Learn from this: the next relationship must be mutual effort. Don\'t do all the work again.',
      },
      career: {
        upright: 'A collaborative project will bring recognition, growth, and mastery.',
        reversed: 'Vet your collaborators carefully. Not everyone will pull their weight or share your vision.',
      },
      life: {
        upright: 'Mastery through teamwork. The right collaboration is coming.',
        reversed: 'Don\'t build alone, but be selective about your builders.',
      },
      ex: {
        upright: 'The skills you developed in that relationship—the compromising, the building, the teamwork—will serve you with someone who actually shows up to work.',
        reversed: 'If they come back wanting to "try again," ask: what skills have they developed? Are they ready to actually build, or just talk about building again?',
      },
    },
  },
  {
    id: 67,
    name: 'Four of Pentacles',
    arcana: 'Minor',
    vibe: 'The Fortress of Security',
    description: 'Control, stability, security, and holding tight. The line between protection and hoarding.',
    url: '/assets/img/cards/Pents04.jpg',
    past: {
      love: {
        upright: 'Possessiveness or an excessive need for security marked the relationship. Someone was holding on too tight.',
        reversed: 'The grip finally loosened—either through breakthrough or breakdown. What was held too tightly finally broke free.',
      },
      career: {
        upright: 'Conservative financial decisions protected your assets. Playing it safe paid off.',
        reversed: 'Fear of loss made you too rigid. You missed opportunities because you couldn\'t let go of the sure thing.',
      },
      life: {
        upright: 'You established boundaries and held your ground. Security was prioritized.',
        reversed: 'Safety became suffocation. You held on so tight that nothing could breathe.',
      },
      ex: {
        upright: 'One of you was holding on too tight—to the relationship, to control, to security. That grip may have felt like love, but it was fear.',
        reversed: 'The relationship broke because someone finally let go. Or it broke because someone held on so tight it shattered what they were trying to protect.',
      },
    },
    present: {
      love: {
        upright: 'You\'re emotionally hoarding—clinging to memories, feelings, and the idea of them because letting go feels like losing everything.',
        reversed: 'You\'re beginning to open your grip. The walls are cracking and that\'s actually healthy.',
      },
      career: {
        upright: 'You\'re in protection mode—guarding your resources, playing it safe, maintaining security.',
        reversed: 'Either you\'re taking a necessary risk, or fear of change is costing you more than the change itself would.',
      },
      life: {
        upright: 'Boundaries are good, but check yourself: is your "security" actually a cage?',
        reversed: 'You\'re releasing control. It\'s terrifying, but it\'s necessary.',
      },
      ex: {
        upright: 'You\'re holding onto them—not because you want them, but because you\'re terrified of the emptiness if you let go. But holding a closed fist means you can\'t receive anything new.',
        reversed: 'The grip is loosening. You\'re starting to realize that what you\'re holding onto isn\'t even them anymore—it\'s just the fear of being alone.',
      },
    },
    future: {
      love: {
        upright: 'You will finally open your hands. The release will feel like loss at first, then like freedom.',
        reversed: 'If you keep clutching this tight, you\'ll crush whatever you\'re trying to save—or push away whatever\'s trying to arrive.',
      },
      career: {
        upright: 'Your conservative approach will pay off with security and stability.',
        reversed: 'Holding on too tight will cost you more than letting go would. Stagnation is its own form of loss.',
      },
      life: {
        upright: 'Stability is coming, but it requires you to remain open to flow, not frozen in control.',
        reversed: 'You can\'t take it with you. At some point, the vault cracks open whether you want it to or not.',
      },
      ex: {
        upright: 'You\'re going to let go—not because you want to, but because you realize the alternative is worse. And when you finally open your hands, you\'ll find they weren\'t empty. They were just free.',
        reversed: 'The tighter you hold onto what was, the more you block what could be. They\'re not coming back the way you remember anyway. Let go of the ghost.',
      },
    },
  },
  {
    id: 68,
    name: 'Five of Pentacles',
    arcana: 'Minor',
    vibe: 'The Spiritual Winter',
    description: 'Hardship, isolation, and feeling left out in the cold. The poverty mindset—material or emotional.',
    url: '/assets/img/cards/Pents05.jpg',
    past: {
      love: {
        upright: 'A period of feeling abandoned, isolated, and left out in the cold. The relationship made you feel poor—emotionally or literally.',
        reversed: 'Recovery from that cold period. You found your way back from the emotional or material wasteland.',
      },
      career: {
        upright: 'A time of scarcity—job loss, financial hardship, or professional rejection that left you struggling.',
        reversed: 'You found help and emerged from the professional winter. The hard times taught you something.',
      },
      life: {
        upright: 'You focused on lack rather than abundance. The winter felt endless.',
        reversed: 'The winter ended. You realized abundance is a mindset, not just a bank account.',
      },
      ex: {
        upright: 'That relationship left you feeling impoverished—of love, of care, of basic emotional support. You walked through snow while they stayed warm.',
        reversed: 'You survived the winter they put you through. Maybe you came back together after hard times, or maybe you just made it through alone. Either way, you survived.',
      },
    },
    present: {
      love: {
        upright: 'You\'re in "poverty consciousness" about love. You feel like you\'ll never find anything as rich as what you lost. That\'s the wound talking, not the truth.',
        reversed: 'You\'re coming in from the cold. The scarcity mindset is lifting. You\'re beginning to see possibility again.',
      },
      career: {
        upright: 'Financial stress or professional isolation has you feeling left out. The scarcity is real or perceived, but either way it\'s painful.',
        reversed: 'Help is appearing. The financial storm is passing. You\'re finding new sources of support.',
      },
      life: {
        upright: 'There\'s light in the church window—help is available—but you have to stop staring at the snow and look up.',
        reversed: 'You\'re shifting from scarcity to abundance thinking. The winter is ending.',
      },
      ex: {
        upright: 'Without them, you feel impoverished. Like you lost something irreplaceable, like you\'ll never be that "rich" in love again. That\'s grief talking, not reality. The cold is temporary.',
        reversed: 'You\'re starting to realize that their absence isn\'t poverty—their presence was. The cold you feel now is better than the cold you felt with them.',
      },
    },
    future: {
      love: {
        upright: 'The emotional winter will end. You\'ll walk past the place of struggle and find warmth waiting.',
        reversed: 'Help will be offered—accept it. Pride in suffering isn\'t strength.',
      },
      career: {
        upright: 'Recovery is coming. A new opportunity will thaw the financial freeze.',
        reversed: 'Don\'t let pride keep you isolated. Accept support when it appears.',
      },
      life: {
        upright: 'The spiritual winter is ending. Look up—the light is there, waiting for you to notice it.',
        reversed: 'Abundance awaits those who stop fixating on empty hands and start looking for open doors.',
      },
      ex: {
        upright: 'Warmth is coming—from unexpected sources, from new connections, from your own growth. This cold season will end, and you\'ll barely remember why you thought it was eternal.',
        reversed: 'If you keep telling yourself you\'ll never find love like that again, you\'re creating your own winter. The scarcity is in your mind now, not in reality.',
      },
    },
  },
  {
    id: 69,
    name: 'Six of Pentacles',
    arcana: 'Minor',
    vibe: 'The Law of Reciprocity',
    description: 'Generosity, giving and receiving, and the balance of exchange. Who holds the scales?',
    url: '/assets/img/cards/Pents06.jpg',
    past: {
      love: {
        upright: 'An unbalanced dynamic where one person gave everything and the other just received. The scales were never even.',
        reversed: 'The generosity came with strings. What looked like giving was actually control.',
      },
      career: {
        upright: 'A mentor helped you, or you received support that advanced your career. Someone invested in your potential.',
        reversed: 'You were underpaid, exploited, or given "help" that actually kept you dependent.',
      },
      life: {
        upright: 'What you gave came back to you eventually. The universe balanced the scales.',
        reversed: 'Giving so much you depleted yourself, or taking so much you created karmic debt.',
      },
      ex: {
        upright: 'One of you was the giver; one was the taker. The relationship was never equal. If you were the giver, you probably gave until there was nothing left.',
        reversed: 'Their "generosity" was a leash. Every gift, every kindness came with an invisible IOU. What looked like love was actually control.',
      },
    },
    present: {
      love: {
        upright: 'You\'re calculating the emotional debt—how much you gave versus how much you received. The tally is probably painful.',
        reversed: 'Someone is holding all the power in this dynamic. Either you\'re still giving too much, or you\'ve become unwilling to give anything.',
      },
      career: {
        upright: 'Generosity is flowing—mentorship, raises, support. Fair exchange is happening.',
        reversed: 'Watch for strings attached to what you\'re receiving. Not all help is free.',
      },
      life: {
        upright: 'What you give is coming back to you. Be generous—it creates abundance.',
        reversed: 'The scales are tipped. Examine: are you giving too much, or receiving too little?',
      },
      ex: {
        upright: 'You\'re realizing how much you over-gave. All that energy, time, love—poured into someone who didn\'t reciprocate. That awareness hurts, but it\'s necessary.',
        reversed: 'If they\'re trying to "help" you now, ask why. Generosity from someone who hurt you often comes with agenda. What do they want in exchange?',
      },
    },
    future: {
      love: {
        upright: 'Balanced exchange is coming. You\'ll find someone who gives as much as they receive.',
        reversed: 'Be cautious of partners who only know how to take. You\'ve done that already.',
      },
      career: {
        upright: 'Your generosity will be rewarded. Fair deals and mutual benefit are coming.',
        reversed: 'Don\'t over-give hoping for future payback. Protect your energy from those who only take.',
      },
      life: {
        upright: 'The law of reciprocity is working in your favor. What you\'ve given is returning.',
        reversed: 'Balance the scales consciously before giving more. Your generosity has limits.',
      },
      ex: {
        upright: 'You\'re going to attract someone who matches your investment level. No more pouring into empty vessels.',
        reversed: 'If they come back, watch the exchange carefully. Are they finally giving, or just taking in a new way?',
      },
    },
  },
  {
    id: 70,
    name: 'Seven of Pentacles',
    arcana: 'Minor',
    vibe: 'The Patient Harvest',
    description: 'Assessment, patience, and long-term investment. Evaluating whether the effort was worth it.',
    url: '/assets/img/cards/Pents07.jpg',
    past: {
      love: {
        upright: 'You invested years into this relationship, waiting patiently for it to mature into what you hoped it could be.',
        reversed: 'Wasted investment. The seeds you planted in that love never grew, no matter how much you tended them.',
      },
      career: {
        upright: 'Patient, dedicated work that eventually produced results. You trusted the process and it paid off.',
        reversed: 'You waited too long for a reward that never came. The promotion, the recognition, the payoff—none of it materialized.',
      },
      life: {
        upright: 'You trusted timing. The investments of energy and effort you made eventually bore fruit.',
        reversed: 'Impatience sabotaged your results, or you kept watering a garden that was never going to grow.',
      },
      ex: {
        upright: 'Years of investment. Years of patience. Years of believing that if you just kept trying, the harvest would come. And now you\'re standing in the garden wondering if any of it was worth it.',
        reversed: 'The garden was barren the whole time. You kept watering dead soil, convinced something would eventually grow. It wasn\'t patience—it was denial.',
      },
    },
    present: {
      love: {
        upright: 'You\'re pausing to evaluate: Was all that love, time, and effort worth it? What actually grew from everything you planted?',
        reversed: 'You\'re realizing the relationship isn\'t yielding anything. Time to honestly assess whether to keep investing.',
      },
      career: {
        upright: 'A project is in the growth phase. Don\'t rush the harvest—give it time to mature.',
        reversed: 'Short-term thinking is undermining long-term results. Or you\'re waiting on something that\'s not going to grow.',
      },
      life: {
        upright: 'Patience is required. You\'ve done the work; now trust the timing.',
        reversed: 'Ask honestly: Are you waiting for something that\'s never going to bloom?',
      },
      ex: {
        upright: 'You\'re standing in the garden of that relationship, looking at what grew and what didn\'t. The harvest is disappointing. Not because you didn\'t work hard—but because some soil just isn\'t fertile.',
        reversed: 'How long will you wait? They\'ve shown you who they are repeatedly. At some point, patience becomes self-abandonment.',
      },
    },
    future: {
      love: {
        upright: 'You\'ll walk away from barren soil and plant seeds in better ground. Not all gardens deserve your labor.',
        reversed: 'Know when a crop has failed. Don\'t keep watering something that will never bloom.',
      },
      career: {
        upright: 'Your patience will be rewarded. The harvest is approaching.',
        reversed: 'Some investments don\'t pay off. Know when to cut your losses.',
      },
      life: {
        upright: 'The fruits of your labor are almost ready. Keep tending, but also prepare to harvest.',
        reversed: 'Evaluate honestly: Is this worth continuing to invest in, or is it time to plant elsewhere?',
      },
      ex: {
        upright: 'Better soil exists. Richer gardens await you. What you learned from this failed harvest will help you grow something beautiful elsewhere.',
        reversed: 'If you\'re still hoping they\'ll change, ask: How many more seasons will you wait? At what point does patience become waste?',
      },
    },
  },
  {
    id: 71,
    name: 'Eight of Pentacles',
    arcana: 'Minor',
    vibe: 'The Apprentice',
    description: 'Skill development, diligence, and mastery through practice. The reward of dedicated effort.',
    url: '/assets/img/cards/Pents08.jpg',
    past: {
      love: {
        upright: 'You worked hard on that relationship—crafting it carefully, trying to build something excellent through consistent effort.',
        reversed: 'Either you neglected the work relationships require, or you worked so hard on other things that love got ignored.',
      },
      career: {
        upright: 'A period of skill development and dedicated practice. You became good at something through repetition and focus.',
        reversed: 'Half-effort produced half-results. Shortcuts or workaholism undermined the quality.',
      },
      life: {
        upright: 'Practice made you better. You were in a learning phase that served your growth.',
        reversed: 'You missed the forest for the trees—obsessing over details while the big picture collapsed.',
      },
      ex: {
        upright: 'You put in the work. You read the books, had the conversations, tried the techniques. The relationship still failed, but not for lack of effort on your part.',
        reversed: 'Someone wasn\'t doing the work. Either you were too focused on everything else to tend the relationship, or they never showed up with tools in hand.',
      },
    },
    present: {
      love: {
        upright: 'You\'re focused on self-improvement—working out, leveling up, becoming someone you\'re proud of. This is healthy.',
        reversed: 'Self-improvement has become avoidance. You\'re so busy improving yourself that you\'re not available for connection.',
      },
      career: {
        upright: 'You\'re developing mastery through dedicated practice. Focus on the details—excellence is built one piece at a time.',
        reversed: 'Perfectionism or shortcuts are undermining your work. Quality requires balance.',
      },
      life: {
        upright: 'You\'re in apprentice mode. Learning, practicing, refining. This is a valuable phase—embrace it.',
        reversed: 'All work and no play is creating imbalance. Don\'t lose yourself in the grind.',
      },
      ex: {
        upright: 'Throw yourself into becoming excellent. Not for them—not to make them regret leaving—but for you. The best healing is becoming someone you respect.',
        reversed: 'If your self-improvement is actually just distraction from grief, it won\'t work. You can\'t outwork a broken heart.',
      },
    },
    future: {
      love: {
        upright: 'The work you\'re doing on yourself will pay off. You\'ll become someone who doesn\'t settle for anyone who puts in less effort.',
        reversed: 'Don\'t let self-improvement become a wall against intimacy. At some point, you have to stop preparing and start living.',
      },
      career: {
        upright: 'Your dedication will lead to mastery. The craft you\'re developing will open doors.',
        reversed: 'Balance perfection with completion. Done is better than endlessly refined.',
      },
      life: {
        upright: 'The apprentice becomes the master. Your skills and discipline will reward you.',
        reversed: 'Excellence requires rest too. Don\'t grind yourself into dust.',
      },
      ex: {
        upright: 'You\'re becoming someone they\'d be lucky to have—and someone who knows it. That self-respect is the real harvest of all this work.',
        reversed: 'If all this self-improvement is secretly hoping they\'ll notice, you\'re still giving them power. Do the work for you, or don\'t do it at all.',
      },
    },
  },
  {
    id: 72,
    name: 'Nine of Pentacles',
    arcana: 'Minor',
    vibe: 'The Luxury of Solitude',
    description: 'Independence, self-sufficiency, and enjoying the fruits of your labor. Abundance earned through your own effort.',
    url: '/assets/img/cards/Pents09.jpg',
    past: {
      love: {
        upright: 'A relationship where you felt secure and abundant, though perhaps contained or isolated within that abundance.',
        reversed: 'You stayed for the lifestyle, not the love. Or you were "kept" in a gilded cage.',
      },
      career: {
        upright: 'You achieved a level of success where you set your own rules. Financial independence through your own work.',
        reversed: 'Looking wealthy but running on empty. The appearance of success without the substance.',
      },
      life: {
        upright: 'You built your own garden and enjoyed it. Self-sufficiency was your accomplishment.',
        reversed: 'The garden became a prison. Beautiful but isolated. Rich but lonely.',
      },
      ex: {
        upright: 'There was security and comfort in that relationship—maybe too much comfort. You were provided for, but were you free?',
        reversed: 'You traded authenticity for security. The golden cage was beautiful, but it was still a cage. Leaving it was the real luxury.',
      },
    },
    present: {
      love: {
        upright: 'You\'re discovering the richness of your own company. You don\'t need anyone to complete you—you\'re already whole.',
        reversed: 'Be honest: is this "independence" actually isolation? There\'s a difference between enjoying solitude and hiding in it.',
      },
      career: {
        upright: 'You\'re in control of your professional life. Self-employment energy, even if you work for someone else.',
        reversed: 'Success feels hollow. You have the money, but what\'s the point?',
      },
      life: {
        upright: 'Enjoy what you\'ve built. Buy yourself something nice. You\'ve earned the luxury of your own creation.',
        reversed: 'A golden cage is still a cage. Make sure your comfort isn\'t costing you connection.',
      },
      ex: {
        upright: 'Look at you—standing in a garden you built yourself. They\'re not in it, and you know what? The flowers are still blooming.',
        reversed: 'If your independence is really just a wall to keep from being hurt again, it\'s not freedom—it\'s fortress-building. Know the difference.',
      },
    },
    future: {
      love: {
        upright: 'You\'ll reach a level of self-sufficiency that\'s genuinely attractive. Not needing anyone is the most magnetic quality of all.',
        reversed: 'Be careful that self-sufficiency doesn\'t become emotional unavailability. You can be whole and still let people in.',
      },
      career: {
        upright: 'Financial freedom and independence await. You\'re building toward true self-sufficiency.',
        reversed: 'Wealth without purpose is emptiness with good credit. Know why you\'re building.',
      },
      life: {
        upright: 'The luxury of solitude—earned through your own effort—is your future. You\'ll need no one to complete you.',
        reversed: 'Enjoy your garden, but let others visit. Perfect solitude can become perfect loneliness.',
      },
      ex: {
        upright: 'Independence isn\'t spite—it\'s power. You\'re going to build a life so complete that whether they regret leaving becomes completely irrelevant.',
        reversed: 'If your "thriving alone" is really just "hiding alone," they\'ve still affected your capacity to connect. That\'s not winning; that\'s damage.',
      },
    },
  },
  {
    id: 73,
    name: 'Ten of Pentacles',
    arcana: 'Minor',
    vibe: 'The Empire',
    description: 'Legacy, wealth, family, and long-term security. The culmination of material success.',
    url: '/assets/img/cards/Pents10.jpg',
    past: {
      love: {
        upright: 'A relationship with deep roots—shared property, family connections, years of investment. A whole life built together.',
        reversed: 'Family drama, inheritance disputes, or traditions that suffocated rather than supported.',
      },
      career: {
        upright: 'A position or business meant to last generations. You were building something permanent.',
        reversed: 'The collapse of something that was supposed to be stable. Long-standing structures crumbled.',
      },
      life: {
        upright: 'You were part of a larger legacy. Your story connected to those before and after you.',
        reversed: 'You had to break from family or tradition because it was destroying you.',
      },
      ex: {
        upright: 'This wasn\'t just a relationship—it was an empire you built together. House, family, pets, shared history, intertwined lives. The loss isn\'t just them; it\'s an entire world you constructed.',
        reversed: 'The "empire" was rotting from within. The family picture looked perfect on the outside while everything crumbled behind closed doors.',
      },
    },
    present: {
      love: {
        upright: 'You\'re dealing with the legacy—dividing assets, untangling shared connections, figuring out who gets the friends.',
        reversed: 'The division is messy and painful. Fighting over what you built together.',
      },
      career: {
        upright: 'You\'re building something designed to outlast you. Dynasty energy.',
        reversed: 'Short-term thinking is threatening long-term stability. Quick wins are undermining the empire.',
      },
      life: {
        upright: 'You\'re part of something larger than yourself. Honor your roots while building for the future.',
        reversed: 'What was built is showing cracks. The foundation needs attention.',
      },
      ex: {
        upright: 'The empire is dividing. Every shared memory, every mutual friend, every piece of property—it all has to be sorted. This is grief on a logistical level.',
        reversed: 'The fighting over stuff is really fighting over meaning. You\'re not arguing about furniture; you\'re arguing about whose version of the relationship was real.',
      },
    },
    future: {
      love: {
        upright: 'You will build lasting love again—security that doesn\'t depend on one person. Your capacity for empire-building didn\'t die with this relationship.',
        reversed: 'Make sure the foundation is solid this time. Don\'t add floors to a building with cracks.',
      },
      career: {
        upright: 'Long-term wealth and legacy are building. Think generationally.',
        reversed: 'Don\'t sacrifice the empire for quick gains.',
      },
      life: {
        upright: 'You\'re building something that will last beyond you. Your legacy is taking shape.',
        reversed: 'All material things are temporary. What will actually remain when you\'re gone?',
      },
      ex: {
        upright: 'The empire you lost will be rebuilt—differently, but just as real. You know how to build now. That skill doesn\'t disappear.',
        reversed: 'Don\'t let the loss of this shared empire make you afraid to build again. Not everyone will tear down what you create together.',
      },
    },
  },
  {
    id: 74,
    name: 'Page of Pentacles',
    arcana: 'Minor',
    vibe: 'The Practical Dreamer',
    description: 'New opportunities, studiousness, and practical goals. The beginning of manifesting dreams into reality.',
    url: '/assets/img/cards/Pents11.jpg',
    past: {
      love: {
        upright: 'A young or new connection focused on learning about each other. The relationship was a school for growth.',
        reversed: 'You got bored with someone stable and went chasing excitement. Substance lost to sparkle.',
      },
      career: {
        upright: 'A new skill, certification, or opportunity that set you on your current path.',
        reversed: 'A project or educational opportunity that never got off the ground.',
      },
      life: {
        upright: 'Practical curiosity led you somewhere important. You planted seeds with intention.',
        reversed: 'Dreams without plans, ideas without execution, potential without follow-through.',
      },
      ex: {
        upright: 'That relationship taught you things—about love, about yourself, about what you actually need. It was school, even if it didn\'t last.',
        reversed: 'You got bored with someone good because they weren\'t exciting enough. Now you might be wondering what you gave up.',
      },
    },
    present: {
      love: {
        upright: 'Small, grounded signs of new possibility. A practical message, a real-world encounter, something tangible beginning.',
        reversed: 'You\'re seeking excitement when what you need is stability. Chasing fireworks, missing foundations.',
      },
      career: {
        upright: 'Setting practical goals and making realistic plans. Your ambitions are becoming tangible.',
        reversed: 'Procrastination or unrealistic planning is holding you back.',
      },
      life: {
        upright: 'Manifestation 101—focus on practical steps, not just dreams. The physical world responds to grounded effort.',
        reversed: 'Dreams without plans go nowhere. Ground your vision in reality.',
      },
      ex: {
        upright: 'There might be practical contact—about stuff, about logistics, about real-world matters. Don\'t read romance into practical communication.',
        reversed: 'If you\'re hoping every text about the apartment or the shared stuff is a sign they want you back, you\'re seeing what isn\'t there.',
      },
    },
    future: {
      love: {
        upright: 'A grounded, practical new beginning in love. Not dramatic—real. Someone who plans to build, not just dream.',
        reversed: 'Don\'t mistake practicality for passion. Know what actually fulfills you.',
      },
      career: {
        upright: 'A tangible opportunity is coming. Something you can actually build on.',
        reversed: 'Follow through is everything. Ideas without execution mean nothing.',
      },
      life: {
        upright: 'Practical magic—small, consistent steps will manifest big dreams.',
        reversed: 'Stop planning and start doing. The seed needs to actually be planted.',
      },
      ex: {
        upright: 'New practical opportunities are coming—career, living situation, connections that are grounded in reality. Focus on building, not on them.',
        reversed: 'If they reach out with practical requests, don\'t inflate it into reconciliation. Logistics aren\'t love letters.',
      },
    },
  },
  {
    id: 75,
    name: 'Knight of Pentacles',
    arcana: 'Minor',
    vibe: 'The Steady Provider',
    description: 'Reliability, hard work, routine, and methodical progress. Slow and steady wins the race.',
    url: '/assets/img/cards/Pents12.jpg',
    past: {
      love: {
        upright: 'A steady, reliable partnership. Maybe not exciting, but dependable. Someone who showed up consistently.',
        reversed: 'The relationship became a routine—predictable to the point of suffocation. All duty, no spark.',
      },
      career: {
        upright: 'Methodical work that paid off over time. You built success through consistency and reliability.',
        reversed: 'Stuck in a grind that lost all meaning. A cog in a machine going nowhere.',
      },
      life: {
        upright: 'The power of routine. Boring, consistent effort built something substantial.',
        reversed: 'Stuck in a rut so deep you couldn\'t see out of it.',
      },
      ex: {
        upright: 'They were reliable—maybe the most reliable person you\'ve known. That\'s something. Boring and stable has value, even if it wasn\'t enough.',
        reversed: 'The relationship became a dead routine. Same conversations, same issues, same everything. You weren\'t partners; you were roommates with history.',
      },
    },
    present: {
      love: {
        upright: 'Things are moving slowly—no dramatic developments, just gradual distance or gradual progress. The turtle pace of emotional change.',
        reversed: 'Complete stagnation. Nothing is moving in any direction. The frustration is real.',
      },
      career: {
        upright: 'Slow and steady is your mode. Reliability is your superpower. Trust the process.',
        reversed: 'The grind has lost its meaning. You\'re working without purpose.',
      },
      life: {
        upright: 'Honor your routine. The boring, consistent work is what builds empires.',
        reversed: 'You\'re stuck in a rut. The routine has become a prison.',
      },
      ex: {
        upright: 'Healing isn\'t happening in dramatic breakthroughs—it\'s happening in slow, steady steps. That\'s okay. Progress is progress.',
        reversed: 'Nothing\'s moving. You\'re not getting worse, but you\'re not getting better either. Stagnation has become its own trap.',
      },
    },
    future: {
      love: {
        upright: 'If change comes, it will come slowly but solidly. Reliability over drama.',
        reversed: 'Don\'t mistake slow for certain. Make sure things are actually moving, not just static.',
      },
      career: {
        upright: 'Steady progress will lead to success. The tortoise wins.',
        reversed: 'Routine shouldn\'t become a prison. Know when stability becomes stagnation.',
      },
      life: {
        upright: 'Patience and persistence will get you there. Trust the slow path.',
        reversed: 'Sometimes you need to speed up. Know when to accelerate.',
      },
      ex: {
        upright: 'If they come back, it won\'t be in a dramatic gesture—it\'ll be in slow, practical steps. The question is whether slow is the same as real.',
        reversed: 'Slow can mean "taking time to grow" or "never actually changing." Make sure you know which one you\'re waiting for.',
      },
    },
  },
  {
    id: 76,
    name: 'Queen of Pentacles',
    arcana: 'Minor',
    vibe: 'The Earth Queen',
    description: 'Nurturing abundance, practical wisdom, and creating security. The power to make any space feel like home.',
    url: '/assets/img/cards/Pents13.jpg',
    past: {
      love: {
        upright: 'You were the nurturer, the homemaker, the one who created warmth and security. The relationship felt like home because of your effort.',
        reversed: 'Nurturing became smothering. Your care was too much, or their demands depleted you entirely.',
      },
      career: {
        upright: 'Grounded leadership and wise resource management. You led with practicality and warmth.',
        reversed: 'Work-life balance collapsed. You either neglected home for career or career for home.',
      },
      life: {
        upright: 'Creating beauty and comfort in your environment. Your space reflected your inner abundance.',
        reversed: 'Disconnected from your body, your home, your physical environment. The earth energy was blocked.',
      },
      ex: {
        upright: 'You made that relationship a home. Your nurturing energy created the warmth they\'ll probably miss. That ability to create comfort—it\'s yours, not the relationship\'s.',
        reversed: 'You gave until you were empty. Nurtured until you had nothing left for yourself. The giving wasn\'t generous—it was desperate.',
      },
    },
    present: {
      love: {
        upright: 'You\'re reclaiming your throne. Focusing on your health, your home, your comfort. Creating security for yourself.',
        reversed: 'Jealousy or insecurity is blocking your abundance. You feel impoverished despite having plenty.',
      },
      career: {
        upright: 'Nurturing your career with practical wisdom. Grounded success through sensible decisions.',
        reversed: 'Work-life imbalance is taking its toll. Something is suffering from neglect.',
      },
      life: {
        upright: 'Be the queen of your own domain. Make your space beautiful, tend your body, create comfort.',
        reversed: 'Your nurturing energy has turned bitter. Take care of yourself before you can care for anything else.',
      },
      ex: {
        upright: 'Create home for yourself now. The nurturing energy you poured into them? Pour it into your own life. Your comfort no longer depends on their presence.',
        reversed: 'Don\'t let the loss make you cold. Your ability to nurture is a gift—don\'t shut it down just because they didn\'t deserve it.',
      },
    },
    future: {
      love: {
        upright: 'You\'ll become so abundant in yourself that you attract quality. Self-nurturing is magnetic.',
        reversed: 'Don\'t lose yourself in caring for others. Your throne needs you sitting on it, not away serving someone else.',
      },
      career: {
        upright: 'Abundance through practical wisdom. You\'ll manage resources beautifully.',
        reversed: 'Balance giving to others with giving to yourself.',
      },
      life: {
        upright: 'The Earth Queen rises. Grounded, abundant, deeply at home in your own skin.',
        reversed: 'Barren ground comes from over-giving. You cannot pour from an empty vessel.',
      },
      ex: {
        upright: 'You\'re going to create a home so beautiful and a life so nurturing that their absence becomes meaningless. The comfort you shared? You\'ll build it again, by yourself and for yourself.',
        reversed: 'If you\'ve shut down your nurturing side because they didn\'t appreciate it, you\'re letting them win. Your warmth is yours to give to deserving people, including yourself.',
      },
    },
  },
  {
    id: 77,
    name: 'King of Pentacles',
    arcana: 'Minor',
    vibe: 'The Golden King',
    description: 'Material mastery, success, and abundance. The Midas touch—turning vision into wealth.',
    url: '/assets/img/cards/Pents14.jpg',
    past: {
      love: {
        upright: 'A partner who was a provider, successful and stable. Perhaps too focused on material success, but always reliable.',
        reversed: 'A controlling partner who used money as power. Generosity was actually manipulation.',
      },
      career: {
        upright: 'The Midas touch—everything you touched turned to gold. Material mastery was yours.',
        reversed: 'A ruthless approach that made money but cost you something important. Or financial loss through overconfidence.',
      },
      life: {
        upright: 'Confidence in the material world. You built a kingdom through competence and vision.',
        reversed: 'The miser mentality—having wealth but being afraid to use or share it.',
      },
      ex: {
        upright: 'They provided stability and success. That material security was real. But the question was always: were you a partner or a possession?',
        reversed: 'Money was their weapon. They used financial control to keep you dependent, to buy your loyalty, to make leaving feel impossible.',
      },
    },
    present: {
      love: {
        upright: 'You\'re taking charge of your material life, and with it, your emotional power. No more "weak" energy.',
        reversed: 'Be careful that financial focus doesn\'t become emotional unavailability. Money can\'t buy connection.',
      },
      career: {
        upright: 'The Midas touch is active. You\'re building real, sustainable wealth.',
        reversed: 'Greed or ethical shortcuts are creeping in. Success at what cost?',
      },
      life: {
        upright: 'Material mastery. You have the power to build whatever you want in the physical world.',
        reversed: 'The soul getting lost in the worship of gold. What actually matters to you?',
      },
      ex: {
        upright: 'You\'re becoming financially and emotionally unshakeable. That stability they provided? You\'re providing it for yourself now.',
        reversed: 'If your response to heartbreak is to focus only on money and success, you might win the material game while losing the emotional one.',
      },
    },
    future: {
      love: {
        upright: 'You\'ll reach a place of such stability that you won\'t tolerate anyone who brings chaos. Your standards will be your strength.',
        reversed: 'Don\'t let wealth become a wall. The richest life includes love, not just assets.',
      },
      career: {
        upright: 'Empire-building success. Sustainable wealth and material mastery await.',
        reversed: 'Watch for corruption or obsession with expansion. Sustainable beats fast.',
      },
      life: {
        upright: 'The Golden King rises. Material mastery and unshakeable confidence are your future.',
        reversed: 'Wealth without wisdom is hollow. The richest king with no one to share it is still alone.',
      },
      ex: {
        upright: 'You\'re going to build something so solid that their presence or absence becomes irrelevant. Your kingdom won\'t depend on anyone.',
        reversed: 'If your success is secretly about proving something to them, they still own too much of you. Build for yourself, not for their regret.',
      },
    },
  },
];
