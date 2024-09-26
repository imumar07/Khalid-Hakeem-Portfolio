// src/components/TwitterFeed.jsx

import { useEffect, useState } from 'react';
import axios from 'axios';

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', { // Updated endpoint
          headers: {
            'Authorization': `Bearer AAAAAAAAAAAAAAAAAAAAAMRQwAEAAAAAIY%2FqYV4iJty38kieoSyVIde%2FjUA%3DXDmhlEn9q76knzc7UY2QjH3Yxm4e7RtKrnWG9NBZeSWyjTU4Z7`, // Use your actual Bearer Token securely
          },
          params: {
            'query': 'Morning', // Define your query
            'max_results': 2 // You can adjust this
          }
        });

        // Check if data exists and set the tweets
        if (response.data.data) {
          setTweets(response.data.data);
        } else {
          setError('No tweets found.');
        }
      } catch (err) {
        console.error(err); // Log error for debugging
        setError(err.response?.data?.detail || 'Error fetching tweets.'); // Enhanced error message
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div>
      {loading && <p>Loading tweets...</p>}
      {error && <p>{error}</p>}
      {tweets.length > 0 ? (
        tweets.map(tweet => (
          <div key={tweet.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <p>{tweet.text}</p>
          </div>
        ))
      ) : (
        !loading && <p>No tweets found.</p> // Show this only if not loading
      )}
    </div>
  );
};

export default TwitterFeed;
