require "open-uri"
p1 = Product.create(name: "Belcampo Sofa", description: "The sumptuously comfortable Belcampo sofa makes it easy to camp out in style. Inspired by quality menswear, the linen-weave upholstery naturally works in a rich jute tone. Crisply tailored box cushions and roll arms give the sofa a modern classic shape sure to complement so many aesthetics. Sporting shades of warm terracotta and indigo blue, four decorative pillows add fashionable flair.
Corner-blocked frame
Attached back and loose seat cushions
High-resiliency foam cushions wrapped in thick poly fiber
4 decorative pillows included
Polyester upholstery and pillows
Pillows with soft polyfill
Exposed feet with faux wood finish
Excluded from promotional discounts and coupons
Fabric Details
Body and One Side Toss Pillows: Polyester (100)%
Oneside Toss Pillows: Polyester (100)%
140 lbs. (63.5 kgs.)", category: "Couch and Sofa", measurement: 'Width: 102.00", Depth: 41.00", Height: 40.00"', color: "gray", price: 899.00)
p1-0 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/main_13405-38-SET.webp')
p1-1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/1340538-10x8-CROP.png')
p1-2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-MOOD-A.webp')
p1-3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-38-SW-P1-KO.webp')
p1-4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-38-35.webp')
p1-5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-38-35-T046-ALT.webp')

p1.images.attach(io:p1-0, filename: 'images/belcampo sofa/main_13405-38-SET.webp')
p1.images.attach(io:p1-1, filename: 'images/belcampo sofa/1340538-10x8-CROP.png')
p1.images.attach(io:p1-2, filename: 'images/belcampo sofa/13405-MOOD-A.webp')
p1.images.attach(io:p1-3, filename: 'images/belcampo sofa/13405-38-SW-P1-KO.webp')
p1.images.attach(io:p1-4, filename: 'images/belcampo sofa/13405-38-35.webp')
p1.images.attach(io:p1-5, filename: 'images/belcampo sofa/13405-38-35-T046-ALT.webp')



p2 = Product.create({name: "Abinger Sofa", description: "If you’re looking to lighten the mood, you’re sure to find the space-conscious, budget-conscious Abinger sofa a breath of fresh air. Covered in a cream-tone chenille upholstery loaded with plush texture, this less-is-more contemporary sofa is dressed to impress with angled side profiling and track armrests wrapped with a layer of pillowy softness for that little something extra. Crisp and clean, the 2-over-2 cushion styling adds up to one sensational look.
Corner-blocked frame
Attached back and loose seat cushions
High-resiliency foam cushions wrapped in thick poly fiber
Polyester upholstery
2 throw pillows included
Pillows with soft polyfill
Exposed feet with faux wood finish
Fabric Details
Body and One Side Toss Pillows: Polyester (100)%
Oneside Toss Pillows: Polyester (100)%
Weight
124 lbs. (56.25 kgs.)", category: "Couch and Sofa", measurement: '"Width: 89.00"  Depth: 38.00"  Height: 39.00"' ,color: "Natural, Smoke", price: 649.00 })

p2-1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/main_8390438-SET-10X8-CROP.webp')
p2.images.attach(io:p2-1, filename: 'images/abinger_sofa/main_8390438-SET-10X8-CROP.webp')
p2-2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/8390438-Abinger-DIM.webp')
p2.images.attach(io:p2-2, filename: 'images/abinger_sofa/8390438-Abinger-DIM.webp')
p2-3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-SWATCH-BODY-A-500.jpeg')
p2.images.attach(io:p2-3, filename: 'images/abinger_sofa/83904-SWATCH-BODY-A-500.jpeg')
p2-4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-SIDE-SW-P1-KO.webp')
p2.images.attach(io:p2-4, filename: 'images/abinger_sofa/83904-38-SIDE-SW-P1-KO.webp')
p2-5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-HEAD-ON-SW-P1-KO.webp')
p2.images.attach(io:p2-5, filename: 'images/abinger_sofa/83904-38-HEAD-ON-SW-P1-KO.webp')
p2-6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-BACK-SW-P1-KO.webp')
p2.images.attach(io:p2-6, filename: 'images/abinger_sofa/83904-38-BACK-SW-P1-KO.webp')
p2-7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-ANGLE-SW-P1-KO.webp')
p2.images.attach(io:p2-7, filename: 'images/abinger_sofa/83904-38-ANGLE-SW-P1-KO.webp')


p3 = Product.create({name: "Lyman Sofa", description: "
Mixing mid-century inspiration with modern attitude, the Lyman sofa is as retro chic as it is fashion forward. Loaded with multi-tonal interest, the granite gray upholstery is the essence of earthy elegance. Design elements include 2-over-2 cushion styling, t-cushions wrapping around slim track arms and tapered accent legs that are right on point.
Corner-blocked frame
Attached back and loose seat cushions
High-resiliency foam cushions wrapped in thick poly fiber
Polyester upholstery
Exposed feet with faux wood finish
Platform foundation system resists sagging 3x better than spring system after 20,000 testing cycles by providing more even support
Smooth platform foundation maintains tight, wrinkle-free look without dips or sags that can occur over time with sinuous spring foundations
Fabric Details
Body: Polyester (100)%
Weight
103 lbs. (46.72 kgs.)", category: "Couch and Sofa", measurement: 'Width: 82.00"  Depth: 40.00"  Height: 36.00"', color: "Graphite", price: 749.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/main_93303-38-SET-10X8-CROP.webp')
p3.images.attach(io:file1, filename: 'images/lyman_sofa/main_93303-38-SET-10X8-CROP.webp')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-SIDE-SW-P1-KO.webp')
p3.images.attach(io:file2, filename: 'images/lyman_sofa/93303-38-SIDE-SW-P1-KO.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-HEAD-ON-SW-P1-KO.webp')
p3.images.attach(io:file3, filename: 'images/lyman_sofa/93303-38-HEAD-ON-SW-P1-KO.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-BACK-SW-P1-KO.webp')
p3.images.attach(io:file4, filename: 'images/lyman_sofa/93303-38-BACK-SW-P1-KO.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-ANGLE-SW-P1-KO.webp')
p3.images.attach(io:file5, filename: 'images/lyman_sofa/93303-38-ANGLE-SW-P1-KO.webp')


p4 = Product.create({name: "Gaddis Flip Flop Sofa", description: "Love furniture with a mid-century modern twist? Then you’re sure to flip for the gorgeous Gaddis flip flop sofa in gray. This brilliantly styled sofa-futon is the ultimate choice if you’re short on space but long for form and function. Tailored touches including tapered wood-tone legs and tufted box cushions exude an upscale mood reflecting your fine taste.
Attached back and seat cushions
High-resiliency foam cushions wrapped in thick poly fiber
Polyester upholstery
Tufted details
2 USB ports; power cord included; UL Listed
Exposed wood-tone legs
Estimated Assembly Time: 30 Minutes
Fabric Details
: Polyester (100)%
Weight
111 lbs. (50.35 kgs.)", category: "Couch and Sofa", measurement: 'Width: 78.00"Depth: 32.00"Height: 32.00"', color: "Gray", price: 599.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/main_68206-65-UP-10X8-CROP.webp')
p4.images.attach(io:file1, filename: 'images/gaddis_sofa/main_68206-65-UP-10X8-CROP.webp')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-SWATCH-BODY-A-500.webp')
p4.images.attach(io:file2, filename: 'images/gaddis_sofa/68206-SWATCH-BODY-A-500.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-USB-DETAIL.webp')
p4.images.attach(io:file3, filename: 'images/gaddis_sofa/68206-65-USB-DETAIL.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-UP-ANGLE-SW-P1-KO.webp')
p4.images.attach(io:file4, filename: 'images/gaddis_sofa/68206-65-UP-ANGLE-SW-P1-KO.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-SUPPORT-LEG-DETAIL.jpeg')
p4.images.attach(io:file5, filename: 'images/gaddis_sofa/68206-65-SUPPORT-LEG-DETAIL.jpeg')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-SIDE-UP-SW-P1-KO.webp')
p4.images.attach(io:file6, filename: 'images/gaddis_sofa/68206-65-SIDE-UP-SW-P1-KO.webp')
file7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-SIDE-FLAT-SW-P1-KO.webp')
p4.images.attach(io:file7, filename: 'images/gaddis_sofa/68206-65-SIDE-FLAT-SW-P1-KO.webp')
file8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-HEAD-ON-UP-SW-P1-KO.webp')
p4.images.attach(io:file8, filename: 'images/gaddis_sofa/68206-65-HEAD-ON-UP-SW-P1-KO.webp')
file9 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-HEAD-ON-FLAT-SW-P1-KO.webp')
p4.images.attach(io:file9, filename: 'images/gaddis_sofa/68206-65-HEAD-ON-FLAT-SW-P1-KO.webp')
file10 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-FLAT-ANGLE-SW-P1-KO.webp')
p4.images.attach(io:file10, filename: 'images/gaddis_sofa/68206-65-FLAT-ANGLE-SW-P1-KO.webp')
file11 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-FLAT-10X8-CROP.webp')
p4.images.attach(io:file11, filename: 'images/gaddis_sofa/68206-65-FLAT-10X8-CROP.webp')

p5 = Product.create({name: "Saveto 3-Piece Modular Sofa", description: 'Looking comfortable. Feeling comfortable. That’s what modern farmhouse living is all about. What better way to embrace the modern farmhouse trend than with the Savesto 3-piece sectional sofa in ivory white. As casually cool as they are luxurious, the sectional’s reversible back and seat cushions are feather filled and wrapped in a cottony soft fabric for cloud-like comfort. Crisp, clean lines and track arm styling simply work.
Includes 3 pieces: armless chair, left-arm facing corner chair and right-arm facing corner chair
"left-arm" and "right-arm" describe the position of the arm when you face the piece
Corner-block frame
Loose feather-blend cushions
2 toss pillows included
Pillows with feather-blend inserts
Polyester upholstery and pillows
Exposed feet with faux wood finish
Estimated Assembly Time: 10 Minutes
Fabric Details
Body: Polyester (100)%
Body and Pillows: Polyester (100)%
Weight
215 lbs. (96.75 kgs.)"', category: "Couch and Sofa", measurement: 'Width: 112.00" Depth: 40.00" Height: 37.00"', color: "Ivory, Dark Gray ", price: 1599.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/saveto_sofa/main_31102-64-46-65-10X8-CROP.webp')
p5.images.attach(io:file1 filename: 'images/saveto_sofa/main_31102-64-46-65-10X8-CROP.webp')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/saveto_sofa/31102-SWATCH-BODY-A-500.webp')
p5.images.attach(io:file2, filename: 'images/saveto_sofa/31102-SWATCH-BODY-A-500.webp')


p6 = Product.create({name: "Alcona Sofa", description: "Whether you’re creating a warm and cozy modern farmhouse or cool and contemporary escape, the Alcona sofa is sure to look right at home. High armrests with a rounded track design provide a chic, sheltering effect. Light linen-tone upholstery and 3-over-2 cushion styling is a beauty to behold.
Corner-blocked frame
Attached back and reversible seat cushions
High-resiliency foam cushions wrapped in thick poly fiber
Platform foundation system resists sagging 3x better than spring system after 20,000 testing cycles by providing more even support
Smooth platform foundation maintains tight, wrinkle-free look without dips or sags that can occur over time with sinuous spring foundations
5 toss pillows included
Pillows with soft polyfill
Polyester upholstery; polyester, polyester/linen, polyester/rayon pillows
Exposed feet with faux wood finish
Fabric Details
Body and Oneside Toss and Kidney: Polyester (100)%
Ottoman Top: Polyester (100)%
Oneside Kidney Pillow: Polyester (91)%,Rayon (9)%
Toss Pillows: Linen (9)%,Polyester (91)%
Weight
148 lbs. (67.13 kgs.)", category: "Couch and Sofa", measurement: 'Width: 95.00"Depth: 40.00"Height: 40.00"', color: "Linen", price: 949.00})
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/main_98310-38-SET.webp')
p6.images.attach(io:file1, filename: 'images/alcona_sofa/main_98310-38-SET.webp')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/9831038-Alcona-DIM.webp')
p6.images.attach(io:file2, filename: 'images/alcona_sofa/9831038-Alcona-DIM.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/9831038-10X8-CROP.webp')
p6.images.attach(io:file3, filename: 'images/alcona_sofa/9831038-10X8-CROP.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/98310-38-HEAD-ON-SW-P1-KO.webp')
p6.images.attach(io:file4, filename: 'images/alcona_sofa/98310-38-HEAD-ON-SW-P1-KO.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/98310-38-BACK-SW-P1-KO.webp')
p6.images.attach(io:file5, filename: 'images/alcona_sofa/98310-38-BACK-SW-P1-KO.webp')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/98310-38-ANGLE-SW-P1-KO.webp')
p6.images.attach(io:file6, filename: 'images/alcona_sofa/98310-38-ANGLE-SW-P1-KO.webp')

