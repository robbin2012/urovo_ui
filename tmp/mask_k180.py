from PIL import Image, ImageDraw, ImageFilter
import numpy as np

src = Image.open('public/images/K180.png').convert('RGB')
mask = Image.new('L', src.size, 0)
draw = ImageDraw.Draw(mask)
draw.polygon([(31,66),(39,62),(71,61),(80,63),(87,69),(94,81),(103,94),(111,108),(116,124),(118,148),(119,174),(117,194),(113,211),(106,223),(100,228),(93,224),(87,215),(82,204),(78,191),(73,174),(69,157),(65,142),(59,129),(53,118),(47,109),(40,103),(32,98),(29,87)], fill=255)
draw.polygon([(126,20),(141,17),(166,19),(181,24),(190,31),(191,40),(186,55),(180,72),(172,90),(164,108),(155,129),(146,150),(137,171),(128,190),(119,207),(114,190),(114,171),(115,150),(115,129),(113,112),(109,98),(103,87),(96,77),(91,70),(94,60),(101,49),(109,38),(118,27)], fill=255)
mask_array = np.asarray(mask).copy()
rgb = np.asarray(src).astype(np.int16)
background = (rgb[:,:,2] - rgb[:,:,0] > 28) & (rgb[:,:,2] - rgb[:,:,1] > 6) & (rgb.max(axis=2) > 150)
mask_array[background] = 0
mask = Image.fromarray(mask_array.astype(np.uint8)).filter(ImageFilter.GaussianBlur(.55))
out = src.convert('RGBA')
out.putalpha(mask)
out.save('public/images/K180.png')
