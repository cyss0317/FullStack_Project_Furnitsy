require "open-uri"
p1 = Product.create(name: "Belcampo Sofa", description: "The sumptuously comfortable Belcampo sofa makes it easy to camp out in style. Inspired by quality menswear, the linen-weave upholstery naturally works in a rich jute tone. Crisply tailored box cushions and roll arms give the sofa a modern classic shape sure to complement so many aesthetics. Sporting shades of warm terracotta and indigo blue, four decorative pillows add fashionable flair.",
 highlights:"
Corner-blocked frame!
Attached back and loose seat cushions!
High-resiliency foam cushions wrapped in thick poly fiber!
4 decorative pillows included!
Polyester upholstery and pillows!
Pillows with soft polyfill!
Exposed feet with faux wood finish!
Excluded from promotional discounts and coupons!
Fabric Details Body and One Side Toss Pillows: Polyester (100)%!
Oneside Toss Pillows: Polyester (100)%!
140 lbs. (63.5 kgs.)",
 category: "Couch and Sofa", measurement: 'Width: 102.00",Depth: 41.00",Height: 40.00"', color: "gray", price: 899.00)
p1_0 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/main_13405-38-SET.webp')
p1_1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/1340538-10x8-CROP.png')
p1_2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-MOOD-A.webp')
p1_3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-38-SW-P1-KO.webp')
p1_4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-38-35.webp')
p1_5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-38-35-T046-ALT.webp')

p1.images.attach(io:p1_0, filename: 'images/belcampo sofa/main_13405-38-SET.webp')
p1.images.attach(io:p1_1, filename: 'images/belcampo sofa/1340538-10x8-CROP.png')
p1.images.attach(io:p1_2, filename: 'images/belcampo sofa/13405-MOOD-A.webp')
p1.images.attach(io:p1_3, filename: 'images/belcampo sofa/13405-38-SW-P1-KO.webp')
p1.images.attach(io:p1_4, filename: 'images/belcampo sofa/13405-38-35.webp')
p1.images.attach(io:p1_5, filename: 'images/belcampo sofa/13405-38-35-T046-ALT.webp')



p2 = Product.create({name: "Abinger Sofa", description: "If you’re looking to lighten the mood, you’re sure to find the space-conscious, budget-conscious Abinger sofa a breath of fresh air. Covered in a cream-tone chenille upholstery loaded with plush texture, this less-is-more contemporary sofa is dressed to impress with angled side profiling and track armrests wrapped with a layer of pillowy softness for that little something extra. Crisp and clean, the 2-over-2 cushion styling adds up to one sensational look.",
highlights:"
Corner-blocked frame!
Attached back and loose seat cushions!
High-resiliency foam cushions wrapped in thick poly fiber!
Polyester upholstery!
2 throw pillows included!
Pillows with soft polyfill!
Exposed feet with faux wood finish!
Fabric Details!
Body and One Side Toss Pillows: Polyester (100)%!
Oneside Toss Pillows: Polyester (100)%!
Weight!
124 lbs. (56.25 kgs.)",
 category: "Couch and Sofa", measurement: '"Width: 89.00",Depth: 38.00",Height: 39.00"' ,color: "Natural, Smoke", price: 649.00 })

p2_1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/main_8390438-SET-10X8-CROP.png')
p2.images.attach(io:p2_1, filename: 'images/abinger_sofa/main_8390438-SET-10X8-CROP.png')
p2_2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/8390438-Abinger-DIM.webp')
p2.images.attach(io:p2_2, filename: 'images/abinger_sofa/8390438-Abinger-DIM.webp')
p2_3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-SWATCH-BODY-A-500.jpeg')
p2.images.attach(io:p2_3, filename: 'images/abinger_sofa/83904-SWATCH-BODY-A-500.jpeg')
p2_4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-SIDE-SW-P1-KO.webp')
p2.images.attach(io:p2_4, filename: 'images/abinger_sofa/83904-38-SIDE-SW-P1-KO.webp')
p2_5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-HEAD-ON-SW-P1-KO.webp')
p2.images.attach(io:p2_5, filename: 'images/abinger_sofa/83904-38-HEAD-ON-SW-P1-KO.webp')
p2_6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-BACK-SW-P1-KO.webp')
p2.images.attach(io:p2_6, filename: 'images/abinger_sofa/83904-38-BACK-SW-P1-KO.webp')
p2_7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-ANGLE-SW-P1-KO.webp')
p2.images.attach(io:p2_7, filename: 'images/abinger_sofa/83904-38-ANGLE-SW-P1-KO.webp')





p4 = Product.create({name: "Gaddis Flip Flop Sofa", description: "Love furniture with a mid-century modern twist? Then you’re sure to flip for the gorgeous Gaddis flip flop sofa in gray. This brilliantly styled sofa-futon is the ultimate choice if you’re short on space but long for form and function. Tailored touches including tapered wood-tone legs and tufted box cushions exude an upscale mood reflecting your fine taste.",
highlights:"
Attached back and seat cushions!
High-resiliency foam cushions wrapped in thick poly fiber!
Polyester upholstery!
Tufted details!
2 USB ports; power cord included; UL Listed!
Exposed wood-tone legs!
Estimated Assembly Time: 30 Minutes!
Fabric Details: Polyester (100)%!
Weight 111 lbs. (50.35 kgs.)", category: "Couch and Sofa", measurement: 'Width: 78.00",Depth: 32.00",Height: 32.00"', color: "Gray", price: 599.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/main_68206-65-UP-10X8-CROP.png')
p4.images.attach(io:file1, filename: 'images/gaddis_sofa/main_68206-65-UP-10X8-CROP.png')
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

p3 = Product.create({name: "Lyman Sofa", description: "
Mixing mid-century inspiration with modern attitude, the Lyman sofa is as retro chic as it is fashion forward. Loaded with multi-tonal interest, the granite gray upholstery is the essence of earthy elegance. Design elements include 2-over-2 cushion styling, t-cushions wrapping around slim track arms and tapered accent legs that are right on point.",
highlights:"
Corner-blocked frame!
Attached back and loose seat cushions!
High-resiliency foam cushions wrapped in thick poly fiber!
Polyester upholstery!
Exposed feet with faux wood finish!
Platform foundation system resists sagging 3x better than spring system after 20,000 testing cycles by providing more even support!
Smooth platform foundation maintains tight, wrinkle-free look without dips or sags that can occur over time with sinuous spring foundations!
Fabric Details Body: Polyester (100)%!
Weight 103 lbs. (46.72 kgs.)",
 category: "Couch and Sofa", measurement: 'Width: 82.00",Depth: 40.00",Height: 36.00"', color: "Graphite", price: 749.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/main_93303-38-SET-10X8-CROP.png')
p3.images.attach(io:file1, filename: 'images/lyman_sofa/main_93303-38-SET-10X8-CROP.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-SIDE-SW-P1-KO.webp')
p3.images.attach(io:file2, filename: 'images/lyman_sofa/93303-38-SIDE-SW-P1-KO.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-HEAD-ON-SW-P1-KO.webp')
p3.images.attach(io:file3, filename: 'images/lyman_sofa/93303-38-HEAD-ON-SW-P1-KO.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-BACK-SW-P1-KO.webp')
p3.images.attach(io:file4, filename: 'images/lyman_sofa/93303-38-BACK-SW-P1-KO.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-ANGLE-SW-P1-KO.webp')
p3.images.attach(io:file5, filename: 'images/lyman_sofa/93303-38-ANGLE-SW-P1-KO.webp')


p5 = Product.create({name: "The Man-Den Triple Power Reclining Sofa", description: 'Reserved for him and made for her, The Man-Den power reclining sofa in gray delivers all the comfort and style you could ask for. Inspired by sports car interiors, the seating area is covered in real leather for your pleasure, with a “perforated automotive” treatment for that much more appeal. Positioned at your fingertips, the advanced one-touch power control puts you in the driver’s seat with everything from an Easy View™ power headrest and power lumbar support, to a USB port and wireless charging for your phone. Talk about fully loaded. The middle seat reveals a pull-down table with dimmable reading lights and cup holders. And with integrated cup holders and hidden storage compartments under the posh, padded armrests, this designer power reclining sofa makes the most of every inch of space.',
highlights:"
Includes 3 pieces: armless chair, left-arm facing corner chair and right-arm facing corner chair!
'left-arm' and 'right-arm' describe the position of the arm when you face the piece!
Corner-block frame!
Loose feather-blend cushions!
2 toss pillows included!
Pillows with feather-blend inserts!
Polyester upholstery and pillows!
Exposed feet with faux wood finish!
Estimated Assembly Time: 10 Minutes!
Fabric Details Body: Polyester (100)%!
Body and Pillows: Polyester (100)%!
Weight 215 lbs. (96.75 kgs.)", category: "Couch and Sofa", measurement: 'Width: 112.00",Depth: 40.00",Height: 37.00"', color: "Ivory, Dark Gray ", price: 1599.00 })

file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/main-U8530515-SET-10X8-CROP.png')
p5.images.attach(io:file1, filename: 'images/The Man-Den Triple Power Reclining Sofa/main-U8530515-SET-10X8-CROP.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-CLSD-ANGLE-SW-P1-KO.webp')
p5.images.attach(io:file2, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-CLSD-ANGLE-SW-P1-KO.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-CUP-HLDRS.jpeg')
p5.images.attach(io:file3, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-CUP-HLDRS.jpeg')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-ARM-STORAGE-SW.jpeg')
p5.images.attach(io:file4, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-ARM-STORAGE-SW.jpeg')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-DDT-LIGHT-SW.webp')
p5.images.attach(io:file5, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-DDT-LIGHT-SW.webp')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-DETAIL.webp')
p5.images.attach(io:file6, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-DETAIL.webp')
file7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/AHS_TheManDen_U8530515_PwrRecSofa-AdjHeadrest_P2.jpeg')
p5.images.attach(io:file7, filename: 'images/The Man-Den Triple Power Reclining Sofa/AHS_TheManDen_U8530515_PwrRecSofa-AdjHeadrest_P2.jpeg')
file8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-OPEN-ANGLE-SW-P1-KO.webp')
p5.images.attach(io:file8, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-OPEN-ANGLE-SW-P1-KO.webp')
file9 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-SIDE-SW-P1-KO.webp')
p5.images.attach(io:file9, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-SIDE-SW-P1-KO.webp')
file10 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-SWATCH-BODY-A-500.jpeg')
p5.images.attach(io:file10, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-SWATCH-BODY-A-500.jpeg')

p6 = Product.create({name: "Alcona Sofa", description: "Whether you’re creating a warm and cozy modern farmhouse or cool and contemporary escape, the Alcona sofa is sure to look right at home. High armrests with a rounded track design provide a chic, sheltering effect. Light linen-tone upholstery and 3-over-2 cushion styling is a beauty to behold.",
 highlights:'
Dual-sided recliner!
One-touch power control with Easy View™ power adjustable headrest, power lumbar support, USB charging and wireless phone charging!
Wireless charger accommodates later model smartphones, including Apple iPhone, Samsung Galaxy, Huawei Mate and Nokia Lumia!
Corner-blocked frame with metal reinforced seat!
Attached cushions!
43" high back!
High-resiliency foam cushions wrapped in thick poly fiber!
Leather interior upholstery (with perforated details); vinyl/polyester exterior upholstery!
Pull-down table with 2 cup holders (with 2 layers to accommodate drink containers) dimmable reading lights and magazine storage!
Each armrest includes storage compartment!
Extended ottoman for enhanced comfort!
Nailhead trim!
Power cord included; UL Listed!
Estimated Assembly Time: 15 Minutes!
Fabric Details: Leather (100)% : Polyester (26)%,PVC (74)%!
Weight 320 lbs. (145.15 kgs.)
', category: "Couch and Sofa", measurement: 'Width: 86.00",Depth: 39.00",Height: 43.00""', color: "Linen", price: 949.00})
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

