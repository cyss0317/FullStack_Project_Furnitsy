require 'open-uri'

p1 = Product.create({ name: 'Havalance Dining Table and 6 Chairs Set', description: 'Have your fill of modern farmhouse style with the Havalance 7-piece dining set. Distressed, vintage-style finishes blend weathered neutrals for an utterly charming effect. The table boasts robust legs for a hearty, substantial look while the bent slat back design and cushioned upholstered seat of the dining chairs cater to your aesthetic.',
                      highlights: '
Includes dining table and 6 dining side chairs!
Table made of pine wood, pine veneer and engineered wood with two-tone distressed finish: weathered gray top; vintage white base!
Table seats 6-8!
Chairs made of wood and engineered wood with foam cushioned seat upholstered in polyester oatmeal-color fabric!
Distressed vintage white finish!
Assembly required!
Estimated Assembly Time: 195 Minutes!
Weight 342 lbs. (102.09 kgs.)', category: 'Dining Table', measurement: 'Width: 42.13",Depth:,84.00",Height: 30.00"', color: 'White/Gray', price: 1599.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_dining_table/main_D814-25-01(6)-10X8-CROP.png')
p1.images.attach(io: file1, filename: 'images/havalance_dining_table/main_D814-25-01(6)-10X8-CROP.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_dining_table/D814-25-TOP.webp')
p1.images.attach(io: file2, filename: 'images/havalance_dining_table/D814-25-TOP.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_dining_table/D814-25-DETAIL.jpeg')
p1.images.attach(io: file3, filename: 'images/havalance_dining_table/D814-25-DETAIL.jpeg')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_dining_table/D814-25-ANGLE-SW-P1-KO.webp')
p1.images.attach(io: file4, filename: 'images/havalance_dining_table/D814-25-ANGLE-SW-P1-KO.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_dining_table/D814-25-01(6)-SW-P1-KO.webp')
p1.images.attach(io: file5, filename: 'images/havalance_dining_table/D814-25-01(6)-SW-P1-KO.webp')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_dining_table/D814-01-SW-P1-KO.jpeg')
p1.images.attach(io: file6, filename: 'images/havalance_dining_table/D814-01-SW-P1-KO.jpeg')

p2 = Product.create({ name: 'Bolanburg Counter Height Dining Table', description: 'The beauty and practicality of the Bolanburg counter height table is something to savor. Two-tone textural finish gives this dining table with plank-effect top a double helping of charm. Designed for more than cozy meals, this counter height table includes a built-in cabinet and drawer to store everything from serving essentials to craft and office supplies.',
                      highlights:
"Made of veneers, wood and engineered wood!
Two-tone textural finish; weathered oak finished top and antique white base!
1 cabinet with 1 adjustable shelf; 1 lower drawer!
Seats up to 4!
Dining chairs sold separately!
Assembly required!
Estimated Assembly Time: 45 Minutes!
Weight 140 lbs. (63.5 kgs.)", category: 'Dining Table', measurement: 'Width: 65.00",Depth: 30.00",Height: 36.13"
', color: 'Two-Tone(brown, ivory)', price: 799.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bolanburg_dining_table/main_D647-32-MOOD-C.png')
p2.images.attach(io: file1, filename: 'images/bolanburg_dining_table/main_D647-32-MOOD-C.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bolanburg_dining_table/D647-32-TOP-DETAIL.jpeg')
p2.images.attach(io: file2, filename: 'images/bolanburg_dining_table/D647-32-TOP-DETAIL.jpeg')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bolanburg_dining_table/D647-32-MOOD-B.jpeg')
p2.images.attach(io: file3, filename: 'images/bolanburg_dining_table/D647-32-MOOD-B.jpeg')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bolanburg_dining_table/D647-32-MOOD-A.jpeg')
p2.images.attach(io: file4, filename: 'images/bolanburg_dining_table/D647-32-MOOD-A.jpeg')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bolanburg_dining_table/D647-32-FRONT-SW-P1-KO.webp')
p2.images.attach(io: file5, filename: 'images/bolanburg_dining_table/D647-32-FRONT-SW-P1-KO.webp')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bolanburg_dining_table/D647-32-DETAIL-B.webp')
p2.images.attach(io: file6, filename: 'images/bolanburg_dining_table/D647-32-DETAIL-B.webp')
file7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bolanburg_dining_table/D647-32-DETAIL-A.webp')
p2.images.attach(io: file7, filename: 'images/bolanburg_dining_table/D647-32-DETAIL-A.webp')
file8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bolanburg_dining_table/D647-32-Bolanburg-DIM.jpeg')
p2.images.attach(io: file8, filename: 'images/bolanburg_dining_table/D647-32-Bolanburg-DIM.jpeg')
file9 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bolanburg_dining_table/D647-32-10x8-CROP.webp')
p2.images.attach(io: file9, filename: 'images/bolanburg_dining_table/D647-32-10x8-CROP.webp')

p3 = Product.create({ name: 'Skempton Counter Height Dining Table and Bar Stools (Set of 3)', description: 'The Skempton counter height table and bar stool set invites you to raise the bar on small space living. An inspired choice for coastal chic or modern farmhouse settings, this clean-lined, simply striking set doubles the charm with brown tone plank effect tops, paired with grayish white bases with rub through effect for timeworn appeal. The table’s built-in open shelves make the most of every inch of space.',
                      highlights: '
Includes counter height table and 2 bar stools!
Made of wood, acacia veneer and engineered wood!
Distressed grayish white finish!
Cushioned seat with polyester upholstery!
3 open shelves!
Assembly required!
Estimated Assembly Time: 60 Minutes!
Weight 106 lbs. (48.08 kgs.)', category: 'Dining Table', measurement: 'Width: 36.00",Depth: 30.00",Height: 36.00"', color: 'White/Light Brown', price: 529.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/skempton_dining_table/main_D394-113.png')
p3.images.attach(io: file1, filename: 'images/skempton_dining_table/main_D394-113.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/skempton_dining_table/D394-113-SW-P1-KO.webp')
p3.images.attach(io: file2, filename: 'images/skempton_dining_table/D394-113-SW-P1-KO.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/skempton_dining_table/D394-113-MOOD-V.webp')
p3.images.attach(io: file3, filename: 'images/skempton_dining_table/D394-113-MOOD-V.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/skempton_dining_table/D394-113-MOOD-H.webp')
p3.images.attach(io: file4, filename: 'images/skempton_dining_table/D394-113-MOOD-H.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/skempton_dining_table/D394-113-10X8-CROP.webp')
p3.images.attach(io: file5, filename: 'images/skempton_dining_table/D394-113-10X8-CROP.webp')

p4 = Product.create({ name: 'Havalance Coffee Table', description: 'With its richly rustic finish and textural mix, Havalance coffee table goes to town on bygone beauty. Distressed two-tone treatment blends a weathered gray with vintage white for an utterly charming effect. Robust legs lend a hearty, substantial look that feels right at home.',
                      highlights: "
Made of pine wood, pine veneer and engineered wood!
Two-tone distressed finish: weathered gray top; vintage white base!
Assembly required!
Estimated Assembly Time: 30 Minutes!
Weight 75 lbs. (34.02 kgs.)", category: 'Coffee Table', measurement: 'Width: 46.13",Depth: 32.13",Height: 19.00"', color: 'Gray/white', price: 499.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_coffee_table/main_T814-1-10X8-CROP.png')
p4.images.attach(io: file1, filename: 'images/havalance_coffee_table/main_T814-1-10X8-CROP.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_coffee_table/T814-1-Havalance-DIM.webp')
p4.images.attach(io: file2, filename: 'images/havalance_coffee_table/T814-1-Havalance-DIM.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_coffee_table/T814-1-SW-P1-KO.webp')
p4.images.attach(io: file3, filename: 'images/havalance_coffee_table/T814-1-SW-P1-KO.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/havalance_coffee_table/T814-FINISH-500.webp')
p4.images.attach(io: file4, filename: 'images/havalance_coffee_table/T814-FINISH-500.webp')

# OUTDOOR TABLE

p5 = Product.create({ name: 'Preston Bay Outdoor Fire Pit Table and 4 Chairs', description: 'Bring the relaxed aesthetic of modern farmhouse design outdoors with this 7-piece outdoor dining set. Finished in creamy white—with a wood-look table top for charming contrast—the rust-proof aluminum frames ensure carefree living with easy-breezy appeal. Zippered cushions with Velcro® ties covered in high-performing Nuvella® fabric enhance the comfort and beauty of this outdoor furniture set that’s pretty enough for indoor use.',
                      highlights: '
Includes 5 pieces: fire pit tab and 4 swivel lounge chairs!
Table and chairs with all-weather, rust-free aluminum frame!
Chairs with 360-degree swivel, zippered cushions with Velcro® ties covered in high-performing Nuvella® fabric!
All-weather foam cushion core wrapped in soft polyester!
Clean fabric with mild soap and water, let air dry; for stubborn stains, use a solution of 1 cup bleach to 1 gallon water!
Imported fabric and fill!
47" square fire pit table with CSA-approved 55,000 BTU stainless steel burner with glass beads, burner cover and protective weather cover!
Door conceals gas propane tank (not included)!
Convertible to natural gas!
Assembly required!
Assembly of fire pit table provided with in-home delivery; connection to propane tank or connector hose not provided!
Estimated Assembly Time: 120 Minutes!
Weight250 lbs. (113.4 kgs.)', category: 'Outdoor Furniture', measurement: 'Width: 45.00",Depth: 45.00",Height: 25.50"', color: 'Antique White', price: 3149.00 })
# Product.create({name: "", description: "", category: "", measurement: '', color: "", price:  })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/preston_table_set/main_P460-772-821(4)-FIRE.webp')
p5.images.attach(io: file1, filename: 'images/preston_table_set/main_P460-772-821(4)-FIRE.webp')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/preston_table_set/P460-772-821(4)-SW-P1-KO.webp')
p5.images.attach(io: file2, filename: 'images/preston_table_set/P460-772-821(4)-SW-P1-KO.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/preston_table_set/P460-772-BACK-SW-P1-KO.webp')
p5.images.attach(io: file3, filename: 'images/preston_table_set/P460-772-BACK-SW-P1-KO.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/preston_table_set/P460-772-CLSD-ANGLE-SW-P1-KO.webp')
p5.images.attach(io: file4, filename: 'images/preston_table_set/P460-772-CLSD-ANGLE-SW-P1-KO.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/preston_table_set/P460-821-ANGLE-SW-P1-KO.webp')
p5.images.attach(io: file5, filename: 'images/preston_table_set/P460-821-ANGLE-SW-P1-KO.webp')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/preston_table_set/P460-821-BACK-SW-P1-KO.webp')
p5.images.attach(io: file6, filename: 'images/preston_table_set/P460-821-BACK-SW-P1-KO.webp')
file7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/preston_table_set/P460-821-HEAD-ON-SW-P1-KO.webp')
p5.images.attach(io: file7, filename: 'images/preston_table_set/P460-821-HEAD-ON-SW-P1-KO.webp')
file8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/preston_table_set/P460-821-SIDE-SW-P1-KO.webp')
p5.images.attach(io: file8, filename: 'images/preston_table_set/P460-821-SIDE-SW-P1-KO.webp')

p6 = Product.create({ name: 'Beachcroft Outdoor Dining Table and 4 Chairs and Bench', description: 'Sporting an easy-on-the-eyes look inspired by driftwood, the Beachcroft 6-piece dining set elevates the art of indoor-outdoor living. Beautiful and durable enough for indoor and outdoor use, the brilliantly styled dining chairs and bench entice with plush, removable cushions wrapped in high-performing Nuvella® fabric that are a breeze to keep clean. Sporting an easy-on-the-eyes look inspired by driftwood, the dining table charms with X-leg farmhouse styling and wows with a thick porcelain tabletop that’s a natural complement.',
                      highlights: '
Includes dining table, bench, 2 arm chairs and 2 dining chairs!
All-weather resin wicker handwoven over powdercoated rust-resistant aluminum frame!
Cushions covered in high performing Nuvella® fabric!
All-weather foam cushion core wrapped in soft polyester; imported fabric and fill!
All-weather, rust-resistant, powdercoated aluminum base!
Porcelain tabletop!
Table can accommodate up to 6-8 people!
Clean fabric with mild soap and water, let air dry; for stubborn stains, use a solution of 1 cup bleach to 1 gallon water!
Assembly required!
Estimated Assembly Time: 120 Minutes!
Weight 328 lbs. (148.78 kgs.)', category: 'Outdoor Furniture', measurement: 'Width: 42.38",Depth: 84.38",Height: 29.50""', color: 'Beige', price: 3849.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/main-P791-625-601(2)-601A(2)-600.webp')
p6.images.attach(io: file1, filename: 'images/benchcroft-outdoor/main-P791-625-601(2)-601A(2)-600.webp')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-SWATCH-BODY-500.jpeg')
p6.images.attach(io: file2, filename: 'images/benchcroft-outdoor/P791-SWATCH-BODY-500.jpeg')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-FINISH-B-500.webp')
p6.images.attach(io: file3, filename: 'images/benchcroft-outdoor/P791-FINISH-B-500.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-FINISH-500.webp')
p6.images.attach(io: file4, filename: 'images/benchcroft-outdoor/P791-FINISH-500.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-625-DETAIL.jpeg')
p6.images.attach(io: file5, filename: 'images/benchcroft-outdoor/P791-625-DETAIL.jpeg')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-625-Beachcroft-DIM.webp')
p6.images.attach(io: file6, filename: 'images/benchcroft-outdoor/P791-625-Beachcroft-DIM.webp')
file7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-625-601(2)-601A(2)-600-UMB.webp')
p6.images.attach(io: file7, filename: 'images/benchcroft-outdoor/P791-625-601(2)-601A(2)-600-UMB.webp')
file8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-625-601-601A-600-SW-P1-KO.webp')
p6.images.attach(io: file8, filename: 'images/benchcroft-outdoor/P791-625-601-601A-600-SW-P1-KO.webp')
file9 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-601A-ANGLE-SW-P1-KO.webp')
p6.images.attach(io: file9, filename: 'images/benchcroft-outdoor/P791-601A-ANGLE-SW-P1-KO.webp')
file10 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-601-ANGLE-SW-P1-KO.webp')
p6.images.attach(io: file10, filename: 'images/benchcroft-outdoor/P791-601-ANGLE-SW-P1-KO.webp')
file11 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-600-DETAIL.webp')
p6.images.attach(io: file11, filename: 'images/benchcroft-outdoor/P791-600-DETAIL.webp')
file12 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/benchcroft-outdoor/P791-600-ANGLE-SW-P1-KO.webp')
p6.images.attach(io: file12, filename: 'images/benchcroft-outdoor/P791-600-ANGLE-SW-P1-KO.webp')
