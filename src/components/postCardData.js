const postCardData = [
  {
    post_writer: "Hayley",
    message: "오늘은 정말 힘든 하루였어요.끔찍한 일이 일어났어요.제 새가 세상을 떠났어요.정말 많이 아끼고 사랑했는데요.편히 쉬기를 바랍니다.",
    time_posted: "Today",
    post_image: "https://i.pinimg.com/736x/bb/7b/a8/bb7ba8089578229cefe5893a9eaa870b.jpg"
  },
  {
    post_writer: "Stephan",
    message: "What a wonderful day! I finally got the job I’ve been dreaming about. All the hard work paid off!",
    time_posted: "Yesterday",
    post_image: "https://i.pinimg.com/736x/11/13/02/11130200d254af8c23446762368d3614.jpg"
  },
  {
    post_writer: "Rina",
    message: "Today was heartbreaking. I lost my childhood friend, my dog. I can’t believe they’re gone.",
    time_posted: "Yesterday",
    post_image: "https://i.pinimg.com/736x/6b/92/45/6b9245f2ec4c80da9fb6fd3346f683d0.jpg"
  },
  {
    post_writer: "Liam",
    message: "Just completed my first marathon! Feeling proud and energized.",
    time_posted: "2 days ago",
    post_image: "https://images.unsplash.com/photo-1526403220232-88e99d20d85f?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Sophia",
    message: "Had a fantastic weekend hiking the mountains. Nature is healing.",
    time_posted: "3 days ago",
    post_image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Ethan",
    message: "Launched my startup today! Excited for this new journey.",
    time_posted: "Today",
    post_image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Ava",
    message: "Graduated college with honors! I’m beyond grateful.",
    time_posted: "Yesterday",
    post_image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Noah",
    message: "Volunteered at the shelter today. So fulfilling to help others.",
    time_posted: "4 days ago",
    post_image: "https://images.unsplash.com/photo-1523475496153-3a6ed2d7ecf1?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Isla",
    message: "My first art exhibition was a huge success! Dreams do come true.",
    time_posted: "5 days ago",
    post_image: "https://images.unsplash.com/photo-1504198266285-165a14b2c5cc?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Mason",
    message: "Lost my job today. Feeling uncertain but trying to stay hopeful.",
    time_posted: "Today",
    post_image: "https://images.unsplash.com/photo-1587068129144-bd7b420d2f57?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Zara",
    message: "Backpacking trip across Europe is underway! So excited!",
    time_posted: "Yesterday",
    post_image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Oliver",
    message: "Had the best coffee date today. Simple joys matter the most.",
    time_posted: "2 days ago",
    post_image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Mila",
    message: "Finally moved into my new apartment! Decorating begins!",
    time_posted: "Today",
    post_image: "https://images.unsplash.com/photo-1560185127-6ed189bf02b4?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Lucas",
    message: "Celebrated my parents' 30th anniversary. Love is real.",
    time_posted: "Yesterday",
    post_image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Chloe",
    message: "Painted for the first time in months. It felt healing.",
    time_posted: "3 days ago",
    post_image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Leo",
    message: "Our baby girl arrived today. Welcome to the world!",
    time_posted: "Today",
    post_image: "https://images.unsplash.com/photo-1587049352849-c54cc74ef8f5?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Ella",
    message: "Said goodbye to my best friend who’s moving abroad. Tough day.",
    time_posted: "Yesterday",
    post_image: "https://images.unsplash.com/photo-1542148213-1d5c2c9f4c39?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "James",
    message: "Built my first website today. Feeling proud of myself!",
    time_posted: "Today",
    post_image: "https://images.unsplash.com/photo-1581092918367-7c74e0c47394?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Amelia",
    message: "Baked my first cake today. It was a bit burnt but tasted great!",
    time_posted: "2 days ago",
    post_image: "https://images.unsplash.com/photo-1556912173-3bb406ef9f31?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "William",
    message: "Watched the stars last night. Felt small, but in a good way.",
    time_posted: "3 days ago",
    post_image: "https://images.unsplash.com/photo-1533639323674-cc47b6e2e57f?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Luna",
    message: "Adopted a kitten today! Say hi to Mochi 🐱",
    time_posted: "Today",
    post_image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Benjamin",
    message: "My first photography gig went great! Can’t wait to do more.",
    time_posted: "Yesterday",
    post_image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Grace",
    message: "Finally learned how to ride a bike! Never too late, right?",
    time_posted: "Today",
    post_image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Henry",
    message: "Wrote a poem and shared it online. The feedback was lovely.",
    time_posted: "2 days ago",
    post_image: "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=800&q=60"
  },
  {
    post_writer: "Aria",
    message: "Watched the sunrise with my friends today. It was magical.",
    time_posted: "Today",
    post_image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
  }
];

export default postCardData;
