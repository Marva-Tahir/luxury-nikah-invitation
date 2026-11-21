export interface InvitationConfig {
  bride: {
    fullName: string;
    parentage: string;
    monogramLetter: string;
  };
  groom: {
    fullName: string;
    parentage: string;
    monogramLetter: string;
  };
  event: {
    title: string;
    dateISO: string; // "2027-03-12T17:30:00"
    dayFormatted: string;
    timeFormatted: string;
    hijriDate?: string;
  };
  venue: {
    name: string;
    hall: string;
    city: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  hosts: {
    families: string;
    signatureNote: string;
  };
  audio: {
    src: string;
    title: string;
  };
}

export const invitationConfig: InvitationConfig = {
  bride: {
    fullName: "Ayesha Khan",
    parentage: "Daughter of Mr. & Mrs. Tariq Mahmood Khan",
    monogramLetter: "A",
  },
  groom: {
    fullName: "Ahmed Ali",
    parentage: "Son of Mr. & Mrs. Muhammad Ali Siddiqui",
    monogramLetter: "A",
  },
  event: {
    title: "The Auspicious Nikah Ceremony",
    dateISO: "2027-03-12T17:30:00",
    dayFormatted: "Friday, 12th March 2027",
    timeFormatted: "5:30 PM",
    hijriDate: "3rd Ramadan 1448 AH",
  },
  venue: {
    name: "The Royal Crystal Ballroom",
    hall: "Pearl Continental Hotel",
    city: "Lahore, Pakistan",
    fullAddress: "Shahrah-e-Quaid-e-Azam, Mall Road, Lahore",
    googleMapsUrl: "https://maps.google.com/?q=Pearl+Continental+Hotel+Lahore",
  },
  hosts: {
    families: "Khan & Siddiqui Families",
    signatureNote: "R.S.V.P & Duas from both families",
  },
  audio: {
    src: "/assets/placeholder-music.mp3",
    title: "Royal Instrumental Theme",
  },
};
