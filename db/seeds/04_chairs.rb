require 'open-uri'
p1 = Product.create({name: "Safavieh Nynette Sofa Chair", description: "Make a bold statement in any room with the retro mid-century look of this sofa chair. Its geometric angles allow for a generous seat with maximum style. A designer favorite, its light gray velvet and legs with goldtone caps bring instant character to any modern space.",
highlights:'
Light gray upholstery; legs with goldtone caps
Made with polyester velvet and iron
Assembly required
Weight 50 lbs. (22.68 kgs.)', category: "Accent Chairs", measurement: 'Width: 32.00",Depth: 31.00",Height: 35.50"', color: "Light Gray", price:760.00  })

file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/safavieh_chair/main_A600025594_1.png')
p1.images.attach(io:file1, filename: 'images/safavieh_chair/main_A600025594_1.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/safavieh_chair/A600025594_9.jpeg')
p1.images.attach(io:file2, filename: 'images/safavieh_chair/A600025594_9.jpeg')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/safavieh_chair/A600025594_7.jpeg')
p1.images.attach(io:file3, filename: 'images/safavieh_chair/A600025594_7.jpeg')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/safavieh_chair/A600025594_5.webp')
p1.images.attach(io:file4, filename: 'images/safavieh_chair/A600025594_5.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/safavieh_chair/A600025594_4.jpeg')
p1.images.attach(io:file5, filename: 'images/safavieh_chair/A600025594_4.jpeg')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/safavieh_chair/A600025594_3.webp')
p1.images.attach(io:file6, filename: 'images/safavieh_chair/A600025594_3.webp')
file7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/safavieh_chair/A600025594_2.jpeg')
p1.images.attach(io:file7, filename: 'images/safavieh_chair/A600025594_2.jpeg')
file8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/safavieh_chair/A600025594_10.webp')
p1.images.attach(io:file8, filename: 'images/safavieh_chair/A600025594_10.webp')

p2 = Product.create({name: "Novelda Rocker Accent Chair", description: "Novelda accent chair is a natural beauty. Neutral fabric on light wood tone frame expresses a humble and inviting quality. Sleek rocking chair profile is a worthy addition to a reading nook or sitting area. And with cushions so plush, you’re in for a relaxing time.",
highlights:"
Attached back and seat cushions!
High-resiliency foam cushions wrapped in thick poly fiber!
Linen/cotton blend upholstery!
Exposed frame with faux wood finish!
Estimated Assembly Time: 30 Minutes!
Fabric Details : Cotton (30)%,Linen (70)%!
Weight 44 lbs. (19.96 kgs.)", category: "Accent Chairs", measurement: 'Width: 25.50",Depth: 33.00",Height: 31.75"', color: "Neutral", price: 459.00  })

file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/rocker_chair/main_A3000081-10x8-CROP.png')
p2.images.attach(io:file1, filename: 'images/rocker_chair/main_A3000081-10x8-CROP.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/rocker_chair/A3000081-SWATCH-BODY-A-500.webp')
p2.images.attach(io:file2, filename: 'images/rocker_chair/A3000081-SWATCH-BODY-A-500.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/rocker_chair/A3000081-SW-KO.webp')
p2.images.attach(io:file3, filename: 'images/rocker_chair/A3000081-SW-KO.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/rocker_chair/A3000081-SIDE-SW-QL.webp')
p2.images.attach(io:file4, filename: 'images/rocker_chair/A3000081-SIDE-SW-QL.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/rocker_chair/A3000081-Novelda-DIM.jpeg')
p2.images.attach(io:file5, filename: 'images/rocker_chair/A3000081-Novelda-DIM.jpeg')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/rocker_chair/A3000081-HEAD-ON-SW-QL.webp')
p2.images.attach(io:file6, filename: 'images/rocker_chair/A3000081-HEAD-ON-SW-QL.webp')
file7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/rocker_chair/A3000081-DETAIL-B-QL.jpeg')
p2.images.attach(io:file7, filename: 'images/rocker_chair/A3000081-DETAIL-B-QL.jpeg')
file8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/rocker_chair/A3000081-BACK-SW-QL.jpeg')
p2.images.attach(io:file8, filename: 'images/rocker_chair/A3000081-BACK-SW-QL.jpeg')


p3 = Product.create({name: "Beatrix Side Chair", description: "Sit pretty in this sumptuous yet durable velvet chair. The Beatrix dazzles as a dining chair or as an accent piece. Available in several colors with fab goldtone stainless steel legs and a matching handle on the back. Layer it into any room for a well curated effect.",
highlights:"
Handmade elegantly curved design!
Durable yet sumptuous velvet upholstery!
Fab goldtone stainless steel legs!
Goldtone handle on back!
Solid kiln dried wood frame!
Assembly required!
Weight 26.5 lbs. (12.02 kgs.)", category: "Dining Chairs", measurement: 'Width: 22.00",Depth: 25.20",Height: 33.70"', color: "Pink/Gold", price: 499.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/beatrix_chair/main_D600002554_9.png')
p3.images.attach(io:file1, filename: 'images/beatrix_chair/main_D600002554_9.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/beatrix_chair/D600002554_8.webp')
p3.images.attach(io:file2, filename: 'images/beatrix_chair/D600002554_8.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/beatrix_chair/D600002554_7.webp')
p3.images.attach(io:file3, filename: 'images/beatrix_chair/D600002554_7.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/beatrix_chair/D600002554_6.jpeg')
p3.images.attach(io:file4, filename: 'images/beatrix_chair/D600002554_6.jpeg')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/beatrix_chair/D600002554_5.jpeg')
p3.images.attach(io:file5, filename: 'images/beatrix_chair/D600002554_5.jpeg')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/beatrix_chair/D600002554_4.jpeg')
p3.images.attach(io:file6, filename: 'images/beatrix_chair/D600002554_4.jpeg')
file7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/beatrix_chair/D600002554_2.jpeg')
p3.images.attach(io:file7, filename: 'images/beatrix_chair/D600002554_2.jpeg')
file8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/beatrix_chair/D600002554_1.webp')
p3.images.attach(io:file8, filename: 'images/beatrix_chair/D600002554_1.webp')



# p4 = Product.create({name: "Dinara Accent Chair", description: "Give your classic style a modern edge with the Dinara accent chair. The diamond tufted back and dove gray color combine to create an elevated piece that pays homage to time-honored design while remaining entirely current.",
# highlights:"
# Polyester upholstery!
# Diamond tufted back!
# High-resiliency foam cushions wrapped in thick poly fiber!
# Attached back and t-seat cushion!
# Turned wood legs in light brown finish!
# Platform foundation system resists sagging 3x better than spring system after 20,000 testing cycles by providing more even support!
# Smooth platform foundation maintains tight, wrinkle-free look without dips or sags that can occur over time with sinuous spring foundations!
# Estimated Assembly Time: 15 Minutes!
# Fabric Details!
# Body: Polyester (100)%!
# Weight 61 lbs. (27.67 kgs.)", category: "Accent Chairs", measurement: 'Width: 30.50",Depth: 36.00",Height: 38.00"', color: "Dove Gray", price: 499.00  })
# file1 = open('')
# p4.images.attach(io:file1, filename: '')
# file2 = open('')
# p4.images.attach(io:file2, filename: '')
# file3 = open('')
# p4.images.attach(io:file3, filename: '')
# file4 = open('')
# p4.images.attach(io:file4, filename: '')
# file5 = open('')
# p4.images.attach(io:file5, filename: '')
# file6 = open('')
# p4.images.attach(io:file6, filename: '')
# file7 = open('')
# p4.images.attach(io:file7, filename: '')
# file8 = open('')
# p4.images.attach(io:file8, filename: '')
# file9 = open('')
# p4.images.attach(io:file9, filename: '')
# file10 = open('')
# p4.images.attach(io:file10, filename: '')

p5 = Product.create({name: "Porter Dining Chair", description: "Satisfying your taste for traditional furnishings, the Porter upholstered dining room chair is elegant, without looking fussy. Rolled-back design gives the classic profile a touch of flair and drama. Chair’s back is upholstered on both sides for a posh feel and welcome warmth.",
highlights:"
Made of wood and engineered wood!
Hand-finished!
Cushioned back and seat!
Button tufting!
Polyester upholstery (front and back)!
Assembly required!
Excluded from promotional discounts and coupons!
Estimated Assembly Time: 30 Minutes!
Fabric Details: POLYESTER (100)%!
Weight 100 lbs. (22.68 kgs.)", category: "Dining Chairs", measurement: 'Width: 20.75",Depth: 28.00",Height: 40.75"', color: "Rustic Brown", price: 420.00  })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/dinara_chair/main_A3000200-10X8-CROP.webp')
p5.images.attach(io:file1, filename: 'images/dinara_chair/main_A3000200-10X8-CROP.webp')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/dinara_chair/A3000200-SW-P1-KO.webp')
p5.images.attach(io:file2, filename: 'images/dinara_chair/A3000200-SW-P1-KO.webp')
# file3 = open('')
# p5.images.attach(io:file3, filename: '')
# file4 = open('')
# p5.images.attach(io:file4, filename: '')
# file5 = open('')
# p5.images.attach(io:file5, filename: '')
# file6 = open('')
# p5.images.attach(io:file6, filename: '')
# file7 = open('')
# p5.images.attach(io:file7, filename: '')
# file8 = open('')
# p5.images.attach(io:file8, filename: '')
# file9 = open('')
# p5.images.attach(io:file9, filename: '')
# file10 = open('')
# p5.images.attach(io:file10, filename: '')


# file1 = open('')
# p1.images.attach(io:file1, filename: '')
# file2 = open('')
# p1.images.attach(io:file2, filename: '')
# file3 = open('')
# p1.images.attach(io:file3, filename: '')
# file4 = open('')
# p1.images.attach(io:file4, filename: '')
# file5 = open('')
# p1.images.attach(io:file5, filename: '')
# file6 = open('')
# p1.images.attach(io:file6, filename: '')
# file7 = open('')
# p1.images.attach(io:file7, filename: '')
# file8 = open('')
# p1.images.attach(io:file8, filename: '')
# file9 = open('')
# p1.images.attach(io:file9, filename: '')
# file10 = open('')
# p1.images.attach(io:file10, filename: '')