export default {
  'title': 'Publications',
  'buttons': {
    'project': 'Project',
    'arxiv': 'ArXiv',
    'pdf': 'PDF',
    'code': 'Code',
    'click': 'Click for Details',
    'abstract': 'Abstract',
    'contributions': 'Contributions'
  },
  'data': [
    {
      title: 'OpenVLA: An Open-Source Vision-Language-Action Model',
      date: 'Jue. 2024',
      image: new URL('../../assets/publications/openvla.png', import.meta.url).href,
      description: 'A <span class="highlight-red">7B-parameter</span> open-source vision-language-action model trained on a diverse collection of <span class="highlight-red">970k</span> real-world robot demonstrations.',
      tags: ['Robotics', 'Vision-Language-Action Models'],
      links: {
        arxiv: 'http://arxiv.org/abs/2406.09246',
        pdf: 'http://arxiv.org/pdf/2406.09246',
        code: 'https://github.com/openvla/openvla'
      },
      abstract: 'Large policies pretrained on a combination of Internet-scale vision-language data and diverse robot demonstrations have the potential to change how we teach robots new skills: rather than training new behaviors from scratch, we can fine-tune such vision-language-action (VLA) models to obtain robust, generalizable policies for visuomotor control. Yet, widespread adoption of VLAs for robotics has been challenging as 1) existing VLAs are largely closed and inaccessible to the public, and 2) prior work fails to explore methods for efficiently fine-tuning VLAs for new tasks, a key component for adoption. Addressing these challenges, we introduce OpenVLA, a 7B-parameter open-source VLA trained on a diverse collection of 970k real-world robot demonstrations. OpenVLA builds on a Llama 2 language model combined with a visual encoder that fuses pretrained features from DINOv2 and SigLIP. As a product of the added data diversity and new model components, OpenVLA demonstrates strong results for generalist manipulation, outperforming closed models such as RT-2-X (55B) by 16.5% in absolute task success rate across 29 tasks and multiple robot embodiments, with 7x fewer parameters. We further show that we can effectively fine-tune OpenVLA for new settings, with especially strong generalization results in multi-task environments involving multiple objects and strong language grounding abilities, and outperform expressive from-scratch imitation learning methods such as Diffusion Policy by 20.4%. We also explore compute efficiency; as a separate contribution, we show that OpenVLA can be fine-tuned on consumer GPUs via modern low-rank adaptation methods and served efficiently via quantization without a hit to downstream success rate. Finally, we release model checkpoints, fine-tuning notebooks, and our PyTorch codebase with built-in support for training VLAs at scale on Open X-Embodiment datasets.',
      contributions: [
        'We introduce OpenVLA, a 7B-parameter open-source vision-language-action model trained on a diverse collection of 970k real-world robot demonstrations, which outperforms closed models such as RT-2-X (55B) by 16.5% in absolute task success rate across 29 tasks and multiple robot embodiments.',
        'We identify critical issues in existing conditional prompt tuning methods for VLAs and propose effective solutions, leading to a new state-of-the-art conditional prompt tuning method that outperforms prior methods by 3.49%.',
        'We demonstrate that OpenVLA can be effectively fine-tuned for new settings, achieving strong generalization results in multi-task environments and outperforming from-scratch imitation learning methods such as Diffusion Policy by 20.4%.',
        'We explore compute efficiency techniques, showing that OpenVLA can be fine-tuned on consumer GPUs via low-rank adaptation methods and served efficiently via quantization without a hit to downstream success rate.'
      ]
    },
    {
      title: '<span class="highlight-red">ICML 21</span> Learning Transferable Visual Models From Natural Language Supervision',
      date: 'Nov. 2023',
      image: new URL('../../assets/publications/clip.png', import.meta.url).href,
      description: 'A method for learning transferable visual models from natural language supervision by predicting which caption goes with which image, using a dataset of <span class="highlight-red">400 million</span> (image, text) pairs collected from the internet.',
      tags: ['Vision-Language Models', 'Contrastive Learning'],
      links: {
        arxiv: 'http://arxiv.org/abs/2103.00020',
        pdf: 'http://arxiv.org/abs/2103.00020',
        code: 'https://github.com/openai/CLIP'
      },
      abstract: 'State-of-the-art computer vision systems are trained to predict a ﬁxed set of predetermined object categories. This restricted form of supervision limits their generality and usability since additional labeled data is needed to specify any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes with which image is an efﬁcient and scalable way to learn SOTA image representations from scratch on a dataset of 400 million (image, text) pairs collected from the internet. After pre-training, natural language is used to reference learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks. We study the performance of this approach by benchmarking on over 30 different existing computer vision datasets, spanning tasks such as OCR, action recognition in videos, geo-localization, and many types of ﬁne-grained object classiﬁcation. The model transfers non-trivially to most tasks and is often competitive with a fully supervised baseline without the need for any dataset speciﬁc training. For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot without needing to use any of the 1.28 million training examples it was trained on. We release our code and pre-trained model weights at https://github.com/OpenAI/CLIP.',
      contributions: [
        'We introduce a method for learning transferable visual models from natural language supervision by predicting which caption goes with which image, using a dataset of 400 million (image, text) pairs collected from the internet.',
        'We demonstrate that our approach enables zero-shot transfer of the model to over 30 different existing computer vision datasets, achieving competitive performance with fully supervised baselines without the need for any dataset-specific training.',
        'We show that our model can match the accuracy of the original ResNet-50 on ImageNet in a zero-shot setting, without using any of the 1.28 million training examples it was trained on.'
      ]
    }
  ]
}