---
title: 'Duration  , Time  and Location : The Sentimen Evaluation of Customer Ratings & Review Restaurants in
  Las Vegas City'
author: "Pozy Pak Ya"
date: "October 22, 2015"
output: pdf_document
documentclass: article
classoption: a3paper
---

# Introduction - A description of the question/problem and the rationale for studying it

The evaluation is about the impact of the review towards the stars rating for the are of Last Vegas restaturant. The search keyword is only for the categories like `Restaurants` and city like `Las Vegas`. The justification why choose over this criteria because of the numbers of reviews count for area is among the highest and this is good for the sampling and research. 

To reduce the size of the sample , average size of numbers of message is the minimal size which is around 390. And the numbers of group identified around 1000 

# Methods and Data - Describe how you used the data and the type of analytic methods that you used; it's okay to be a bit technical here but clarity is important

1.  Extraction from YELP Dataset
    The dataset was downloaded from the YELP website (http://www.yelp.com/dataset_challenge).
2.  Parsing into Hive Hadoop
    The dataset was feed into the Cloudera Platform to speed up the data manipulation inside it. Mapreduce is       used via the HIVE as the framework for the processing part which the component can be manipulated using the     noSQL as the `SQL` equivalent for managing the YELP dataset inside Cloudera. Since the YELP dataset is coded     as JSON format , special add-on library like JSON Serde       (https://github.com/cloudera/cdh-twitter-example/tree/master/hive-serdes) is compiled and integrate with Hive. Below is the sample DDL for the business YELP dataset
    
```r
  ADD JAR /CML/lib/lib/hive-serdes-1.0-SNAPSHOT.jar;
  DROP TABLE user;
  CREATE EXTERNAL TABLE user (
    yelping_since STRING,
    votes STRUCT<funny:STRING,useful:STRING,cool:STRING>,
    review_count STRING,
    name STRING,
    user_id STRING,
    friends array<STRING>,
    fans STRING,
    average_stars STRING,
    types STRING,
    compliments STRUCT<profile:STRING,cute:STRING,funny:STRING,plain:STRING,writer:STRING,note:STRING,
    photos:STRING,hot:STRING,cool:STRING,`more`:STRING>,
    elite array<int>
     ) 
  ROW FORMAT SERDE 'com.cloudera.hive.serde.JSONSerDe' LOCATION '/user/hive/warehouse/coursera.db/user';
```
The `STRUCT` type is usded for the table structure for column like `attributes` for user dataset. `STRUCT` is one of the datatype for complex types in Hive.

3.  SQL
4.  Method Used -  Classification , Bayes

# Results - Describe what you found through your analysis of the data.

Figure 1 : Venue with greater than 1000 review messages

Figure 2 : Venue with greater than 390 review messages

* Sentiment Analysis

Positive correlated with the positive emotion words

Figure 3 : Venue with weighted by the numbers of keywords

Sentiment analysis on keyword left 70% of the dataset with neutral sentiment.
Sentiment was found to be 74% positive in nature which corresponds to about 22% of the total sample
In contrast,26% was negative in nature which corresponds to only 8% of the total sample

Figure 4 : Venue with weighted by the numbers of keywords , with positive weight
Figure 5 : Venue with weighted by the numbers of keywords , with negative weight
Figure 6 : Total sentiment classification with positive , negative and neutral
Figure 7 : Cloudwords postive and negative

* Temporal Analysis

Figure 8 : Duration - Negative vs Positive + Neutral
Figure 9 : Comparison by month

# Discussion - Explain how you interpret the results of your analysis and what the implications are for your question/problem.

The issues raise a significant question
* 



```
## character(0)
```

```
## character(0)
```

The `HEAD` records for business types , average ratings and the average review count as follows :



---------------------------------------
      name        stars   review_count 
---------------- ------- --------------
  Mon Ami Gabi      4         4578     

Earl of Sandwich   4.5        3984     

  Wicked Spoon     3.5        3828     

Bacchanal Buffet    4         3046     

 Serendipity 3      3         3007     

   The Buffet      3.5        2949     
---------------------------------------

Table: Las Vegas City Restaurant

Is there any relation between the business type ?


```
## character(0)
```

```
## character(0)
```

```
## K-means clustering with 14 clusters of sizes 9, 17, 23, 3, 18, 24, 13, 18, 6, 17, 18, 7, 24, 26
## 
## Cluster means:
##    longitude latitude review_count
## 1  -115.1753 36.11899    1498.0000
## 2  -115.1712 36.11831     864.3529
## 3  -115.1858 36.12588     424.0435
## 4  -115.1728 36.11103    4130.0000
## 5  -115.1796 36.11818    1103.0000
## 6  -115.1851 36.11760     453.8333
## 7  -115.1838 36.10551     645.0000
## 8  -115.1833 36.12605     400.1111
## 9  -115.1724 36.11733    2785.8333
## 10 -115.1846 36.11616     536.2353
## 11 -115.1837 36.11477     589.8889
## 12 -115.1756 36.11132    2104.5714
## 13 -115.1692 36.09861     490.7917
## 14 -115.1875 36.10984     733.8846
## 
## Clustering vector:
##   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18 
##   1  11   5   6   6  13   6  14   8  10  13   1  14  13   5  14   3  11 
##  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36 
##   2   3   8  11   2  14   5  10   6   8   7  12   3  11  12  12  14   5 
##  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54 
##   8   4   1   1   7   9   5   8  10  11   2   9   5  11   7  10   1  13 
##  55  56  57  58  59  60  61  62  63  64  65  66  67  68  69  70  71  72 
##   2   2   9   3   3  13   8   3  14   5   1  11  13  10   8  14  14   7 
##  73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90 
##   6   6   5  10  11  13   6   3  14  12   7   2   5  14  11   6   7  14 
##  91  92  93  94  95  96  97  98  99 100 101 102 103 104 105 106 107 108 
##   2   3  11   7   7   5   2  11   5  13   6   3   3  13   8   7   4   3 
## 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 
##   6   3  14  13   8   2  13   3   2  10  11  14   5  10  14   2  11   5 
## 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 
##   8   2  13   6  14  13  13   6   5  11  13   9  13  14   3   5   6  14 
## 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 
##   3   3  14  10  13   6   5   6  10  12  14   8   2   8   7  12   6  14 
## 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 
##   6  10   3   2   8   1  10   8   6  10   8  14  13   3   1  13  13   3 
## 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 
##   4  14   2  10  12   3  14   6   5   3  10  13   5   6   6  10  11   3 
## 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 
##  13   6   2   3   7  11   8  13   1  14  14   2   9   8  11   9   6  10 
## 217 218 219 220 221 222 223 
##   6  11  13  14   8   7   7 
## 
## Within cluster sum of squares by cluster:
##  [1] 160204.0029  27811.8958   1167.0605 313224.0000 121096.0096
##  [6]   1947.3934   2782.0395    383.8168 283468.8336   3879.0977
## [11]   3573.8228 132117.7275   2158.0522  22006.7040
##  (between_SS / total_SS =  98.8 %)
## 
## Available components:
## 
## [1] "cluster"      "centers"      "totss"        "withinss"    
## [5] "tot.withinss" "betweenss"    "size"         "iter"        
## [9] "ifault"
```

![](comparison_files/figure-latex/unnamed-chunk-2-1.pdf) 

```
## Map from URL : http://maps.googleapis.com/maps/api/staticmap?center=36.115009,-115.180652&zoom=13&size=640x640&scale=2&maptype=roadmap&language=en-EN&sensor=false
## Map from URL : http://maps.googleapis.com/maps/api/staticmap?center=36.115009,-115.180652&zoom=13&size=640x640&scale=2&maptype=roadmap&language=en-EN&sensor=false
```

```
## Warning: Removed 44 rows containing missing values (geom_point).
```

![](comparison_files/figure-latex/unnamed-chunk-2-2.pdf) 

The population is because the location is very strategic and nearest to the airport 

