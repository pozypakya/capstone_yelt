---
title: "test"
output: pdf_document
---

This is an R Markdown document. Markdown is a simple formatting syntax for authoring HTML, PDF, and MS Word documents. For more details on using R Markdown see <http://rmarkdown.rstudio.com>.

When you click the **Knit** button a document will be generated that includes both content as well as the output of any embedded R code chunks within the document. You can embed an R code chunk like this:


```r
summary(cars)
```

```
##      speed           dist       
##  Min.   : 4.0   Min.   :  2.00  
##  1st Qu.:12.0   1st Qu.: 26.00  
##  Median :15.0   Median : 36.00  
##  Mean   :15.4   Mean   : 42.98  
##  3rd Qu.:19.0   3rd Qu.: 56.00  
##  Max.   :25.0   Max.   :120.00
```

```r
summary(airquality)
```

```
##      Ozone           Solar.R           Wind             Temp      
##  Min.   :  1.00   Min.   :  7.0   Min.   : 1.700   Min.   :56.00  
##  1st Qu.: 18.00   1st Qu.:115.8   1st Qu.: 7.400   1st Qu.:72.00  
##  Median : 31.50   Median :205.0   Median : 9.700   Median :79.00  
##  Mean   : 42.13   Mean   :185.9   Mean   : 9.958   Mean   :77.88  
##  3rd Qu.: 63.25   3rd Qu.:258.8   3rd Qu.:11.500   3rd Qu.:85.00  
##  Max.   :168.00   Max.   :334.0   Max.   :20.700   Max.   :97.00  
##  NA's   :37       NA's   :7                                       
##      Month            Day      
##  Min.   :5.000   Min.   : 1.0  
##  1st Qu.:6.000   1st Qu.: 8.0  
##  Median :7.000   Median :16.0  
##  Mean   :6.993   Mean   :15.8  
##  3rd Qu.:8.000   3rd Qu.:23.0  
##  Max.   :9.000   Max.   :31.0  
## 
```

You can also embed plots, for example:


```r
library(png)
```

```
## Warning: package 'png' was built under R version 3.2.2
```

```r
png(height=300, width=300, pointsize=15, file="abc.png")
plot(cars)
dev.off()
```

```
## pdf 
##   2
```

```r
library(png)
png(height=300, width=300, pointsize=15, file="def.png")
plot(airquality)
dev.off()
```

```
## pdf 
##   2
```

```r
img1 <- readPNG('abc.png')
plot.new()
a <- rasterImage(img1, 100, 300, 150, 350, interpolate = FALSE)
#grid::grid.raster(img1)
img2 <- readPNG('def.png')
b <- rasterImage(img2, 100, 300, 150, 350, interpolate = FALSE)
```

![](test_files/figure-latex/unnamed-chunk-2-1.pdf) 

```r
par(img2)
```

```
## NULL
```




Note that the `echo = FALSE` parameter was added to the code chunk to prevent printing of the R code that generated the plot.
