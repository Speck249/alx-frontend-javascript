interface MajorCredits {
  credits: number;
  brand: MajorCrediet;
}

interface MinorCredits {
  credits: number;
  brand: MinorCredits;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totaCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MajorCredits' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totaCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MinorCredits' };
}
