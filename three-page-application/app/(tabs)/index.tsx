
    import { useThemeColor } from '../../hooks/useThemeColor';
    import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
    import { Ionicons } from '@expo/vector-icons';
    import * as Haptics from 'expo-haptics';
  	import { useState } from 'react';
    import { mockTweets } from '../data/tweet';
    import { Tweet } from '../types';

export default function HomeScreen() {
  const [tweets, setTweets] = useState<Tweet[]>(mockTweets);

        const backgroundColor = useThemeColor({}, 'background');
        const textColor = useThemeColor({}, 'text');
        const secondaryColor = useThemeColor({}, 'secondaryText');
      
        const handleLike = (tweetId: string) => {
          setTweets(tweets.map(tweet => {
            if (tweet.id === tweetId) {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              return {
                ...tweet,
                likes: tweet.liked ? tweet.likes - 1 : tweet.likes + 1,
                liked: !tweet.liked
              };
            }
            return tweet;
          }));
        };
      
        const handleRetweet = (tweetId: string) => {
          setTweets(tweets.map(tweet => {
            if (tweet.id === tweetId) {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              return {
                ...tweet,
                retweets: tweet.retweeted ? tweet.retweets - 1 : tweet.retweets + 1,
                retweeted: !tweet.retweeted
              };
            }
            return tweet;
          }));
        };
      
        const handleComment = (tweetId: string) => {
          setTweets(tweets.map(tweet => {
            if (tweet.id === tweetId) {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              return {
                ...tweet,
                comments: tweet.comments + 1
              };
            }
            return tweet;
          }));
        };
    
      const renderTweet = ({ item }: { item: Tweet }) => (
        <View style={[styles.tweetContainer, { borderBottomColor: secondaryColor }]}>
          <Ionicons name="person-circle" size={48} color={secondaryColor} style={styles.avatar} />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={[styles.userName, { color: textColor }]}>{item.user}</Text>
              <Text style={[styles.userHandle, { color: secondaryColor }]}>{item.handle}</Text>
              <Text style={[styles.tweetTime, { color: secondaryColor }]}>{item.time}</Text>
            </View>
            <Text style={[styles.tweetText, { color: textColor }]}>{item.content}</Text>
            <View style={styles.tweetActions}>
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => handleComment(item.id)}
              >
                <Ionicons name="chatbubble-outline" size={18} color={secondaryColor} />
                <Text style={[styles.actionText, { color: secondaryColor }]}>{item.comments}</Text>
              </TouchableOpacity>
    
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => handleRetweet(item.id)}
              >
                <Ionicons 
                  name={item.retweeted ? 'repeat' : 'repeat-outline'} 
                  size={18} 
                  color={item.retweeted ? '#17bf63' : secondaryColor} 
                />
                <Text style={[styles.actionText, { color: item.retweeted ? '#17bf63' : secondaryColor }]}>
                  {item.retweets}
                </Text>
              </TouchableOpacity>
    
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={() => handleLike(item.id)}
              >
                <Ionicons 
                  name={item.liked ? 'heart' : 'heart-outline'} 
                  size={18} 
                  color={item.liked ? '#e0245e' : secondaryColor} 
                />
                <Text style={[styles.actionText, { color: item.liked ? '#e0245e' : secondaryColor }]}>
                  {item.likes}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor }}>
          <View style={styles.container}>
            <View style={[styles.header, { 
              backgroundColor,
              borderBottomColor: secondaryColor,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
              elevation: 2,
              zIndex: 1
            }]}>
              <Text style={[styles.headerText, { color: textColor }]}>Home</Text>
            </View>
            
            <FlatList
              data={tweets}
              renderItem={renderTweet}
              keyExtractor={item => item.id}
              contentContainerStyle={[styles.listContent, { paddingTop: 60 }]}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<View style={{ height: 16 }} />}
              ListFooterComponent={<View style={{ height: 32 }} />}
            />
          </View>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        zIndex: 2
      },
      headerText: {
        fontSize: 20,
        fontWeight: '800',
      },
      tweetContainer: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        minHeight: 100,
      },
      avatar: {
        marginRight: 12,
      },
      tweetContent: {
        flex: 1,
        marginRight: 8,
      },
      tweetHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 8,
      },
      userName: {
        fontWeight: '700',
        marginRight: 8,
        maxWidth: '40%',
      },
      userHandle: {
        marginRight: 8,
        maxWidth: '40%',
      },
      tweetTime: {
        fontSize: 14,
      },
      tweetText: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 12,
      },
      actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24,
      },
      tweetActions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        gap: 16,
      },
      listContent: {
        paddingBottom: 48,
      },
      actionText: {
        fontSize: 14,
        marginLeft: 4,
      },
    });;
function handleLike(id: string): void {
  throw new Error('Function not implemented.');
}

function handleComment(id: string): void {
  throw new Error('Function not implemented.');
}

function handleRetweet(id: string): void {
  throw new Error('Function not implemented.');
}

