export interface Photo {
    id: number;
    src: string;
    caption?: string;
}

export const photos: Photo[] = [
    { id: 1, src: "/flower1.jpeg", caption: "Flower 1" },
    { id: 2, src: "/flower2.jpeg", caption: "Flower 2" },
    { id: 3, src: "/flower3.jpeg", caption: "Flower 3" },
    { id: 4, src: "/fort.jpeg", caption: "Fort" },
    { id: 5, src: "/fort2.jpeg", caption: "Fort View" },
    { id: 6, src: "/lohgad.jpeg", caption: "Lohgad" },
    { id: 7, src: "/mountain.jpeg", caption: "Mountain" },
    { id: 8, src: "/ramdara.jpeg", caption: "Ramdara" },
    { id: 9, src: "/shivaji.jpeg", caption: "Shivaji Maharaj" },
    { id: 10, src: "/sinhgad.jpeg", caption: "Sinhgad" },
    { id: 11, src: "/visapur.jpeg", caption: "Visapur" },
];
