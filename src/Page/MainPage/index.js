import React, { useEffect, useState } from "react";
import db from "../../firebase";

function MainPage(props) {
  const [viewCount, setViewCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    db.collection("viewCount")
      .doc("8HXcyqBdNY7o9ijzOZHq")
      .get()
      .then((doc) => {
        db.collection("viewCount")
          .doc("8HXcyqBdNY7o9ijzOZHq")
          .update({ viewCount: doc.data().viewCount + 1 });
        setViewCount(doc.data().viewCount);
        setIsLoading(false);
        // console.log(typeof doc.data().viewCount);
      });

    console.log("12322");
  }, []);

  return (
    !isLoading && (
      <div>
        <p>{viewCount + 1}</p>
        <p>123</p>
      </div>
    )
  );
}

export default MainPage;
